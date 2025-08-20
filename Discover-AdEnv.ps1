param(
  [string]$OutEnvPath = ".\.env.suggested",
  [switch]$SkipWrite,
  [string]$ServiceAccountSam = ""
)

function IfEmptyUse {
  param($Value, $Fallback)
  if ($null -ne $Value -and "$Value".Trim() -ne "") { return $Value }
  return $Fallback
}

# Try AD module if available
$domainInfo = $null
try {
  Import-Module ActiveDirectory -ErrorAction Stop
  $domainInfo = Get-ADDomain -ErrorAction Stop
} catch {}

# Fallback to RootDSE if AD module not present
$rootDse = $null
try { $rootDse = [ADSI]"LDAP://RootDSE" } catch {}

# ---- Discover basics ----
$DnsRoot = $null
$BaseDN  = $null
$PDC     = $null
$NetBIOS = $null

if ($domainInfo) {
  $DnsRoot = $domainInfo.DNSRoot
  $BaseDN  = $domainInfo.DistinguishedName
  $PDC     = $domainInfo.PDCEmulator
  $NetBIOS = $domainInfo.NetBIOSName
} elseif ($rootDse) {
  try { $BaseDN = $rootDse.defaultNamingContext } catch {}
  if ($BaseDN) {
    $parts = @()
    foreach ($p in ($BaseDN -split ',')) {
      if ($p -match '^DC=') { $parts += ($p -replace '^DC=','') }
    }
    if ($parts.Count -gt 0) { $DnsRoot = ($parts -join '.') }
  }
  if (-not $PDC -and $env:LOGONSERVER) { $PDC = $env:LOGONSERVER.TrimStart('\') }
  if (-not $PDC -and $env:USERDNSDOMAIN) { $PDC = "dc.$($env:USERDNSDOMAIN)" }
}

if (-not $DnsRoot -and $env:USERDNSDOMAIN) { $DnsRoot = $env:USERDNSDOMAIN }
if (-not $BaseDN -and $DnsRoot) {
  $dnParts = @()
  foreach ($seg in ($DnsRoot -split '\.')) { $dnParts += "DC=$seg" }
  $BaseDN = ($dnParts -join ',')
}
if (-not $PDC -and $DnsRoot) { $PDC = "dc.$DnsRoot" }

# Build LDAP URL
if ($PDC) { $LDAP_URL = "ldap://$PDC:389" } elseif ($DnsRoot) { $LDAP_URL = "ldap://$DnsRoot:389" } else { $LDAP_URL = "ldap://localhost:389" }

# ---- Output summary ----
Write-Host "Discovered values:" -ForegroundColor Cyan
Write-Host ("  DNS Root : {0}" -f (IfEmptyUse $DnsRoot "<unknown>"))
Write-Host ("  Base DN  : {0}" -f (IfEmptyUse $BaseDN  "<unknown>"))
Write-Host ("  DC/Host  : {0}" -f (IfEmptyUse $PDC     "<unknown>"))
Write-Host ("  LDAP URL : {0}" -f (IfEmptyUse $LDAP_URL "<unknown>"))

# Build suggested bind DN
$SuggestedBind = "svc_ldap@$DnsRoot"
if ($ServiceAccountSam -and $DnsRoot) { $SuggestedBind = "$ServiceAccountSam@$DnsRoot" }

# Build a suggested env snippet (edit EMAIL_TO/SMTP_* as needed)
$envSnippet = @"
# ----- Active Directory (edit if needed) -----
LDAP_URL=$LDAP_URL
LDAP_BASE_DN=$BaseDN
LDAP_BIND_DN=$SuggestedBind
LDAP_BIND_PASS=ChangeMe!

# ----- SMTP (edit to your mail relay) -----
SMTP_HOST=smtp.$DnsRoot
SMTP_PORT=587
SMTP_USER=helpdesk@$DnsRoot
SMTP_PASS=ChangeMe!
EMAIL_TO=it1@$DnsRoot,it2@$DnsRoot

# Tip: multiple recipients are comma-separated (no spaces).
"@

Write-Host ""
Write-Host "---------- .env suggestion ----------" -ForegroundColor Yellow
Write-Host $envSnippet
Write-Host "-------------------------------------" -ForegroundColor Yellow

if (-not $SkipWrite) {
  try {
    Set-Content -LiteralPath $OutEnvPath -Value $envSnippet -Encoding UTF8
    Write-Host ("Saved suggestion to: {0}" -f $OutEnvPath) -ForegroundColor Green
  } catch {
    Write-Warning ("Failed to write to {0}: {1}" -f $OutEnvPath, $_.Exception.Message)
  }
}

Write-Host ""
Write-Host "Done." -ForegroundColor Cyan

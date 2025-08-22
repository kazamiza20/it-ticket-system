document.addEventListener('DOMContentLoaded', () => {
  const $ = id => document.getElementById(id);

  function getFormData(formType) {
    return {
      username:  $(formType === 'ar' ? 'usernameAr'  : 'username')?.value.trim() || '',
      email:     $(formType === 'ar' ? 'emailAr'     : 'email')?.value.trim() || '',
      extension: $(formType === 'ar' ? 'extensionAr' : 'extension')?.value.trim() || '',
      department:$(formType === 'ar' ? 'departmentAr': 'department')?.value.trim() || '',
      issue:     $(formType === 'ar' ? 'issueAr'     : 'issue')?.value.trim() || ''
    };
  }

  async function getSuggestion(formType) {
    const statusEl = $(formType === 'ar' ? 'statusAr' : 'status');
    const aiBox    = $(formType === 'ar' ? 'aiBoxAr'  : 'aiBox');
    const aiTitle  = $(formType === 'ar' ? 'aiTitleAr': 'aiTitle');
    const aiSteps  = $(formType === 'ar' ? 'aiStepsAr': 'aiSteps');
    const aiNote   = $(formType === 'ar' ? 'aiNoteAr' : 'aiNote');

    const data = getFormData(formType);
    if (!data.issue) {
      statusEl.textContent = formType === 'ar' ? 'يرجى كتابة المشكلة أولاً.' : 'Type your issue first.';
      return;
    }

    statusEl.textContent = formType === 'ar' ? 'جارٍ التحليل…' : 'Thinking…';

    try {
      const res = await fetch('/ai-suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ issue: data.issue, department: data.department })
      });
      const out = await res.json();

      if (out.suggestions && out.suggestions.length) {
        const s = out.suggestions[0];
        aiTitle.textContent = s.title || (formType === 'ar' ? 'اقتراح' : 'Suggestion');
        aiSteps.innerHTML = '';
        (s.steps || []).forEach(step => {
          const li = document.createElement('li');
          li.textContent = step;
          aiSteps.appendChild(li);
        });
        const conf = typeof s.confidence === 'number' ? Math.round(s.confidence * 100) : 0;
        aiNote.textContent = formType === 'ar'
          ? `نسبة الثقة: ${conf}% · إذا لم تُحل المشكلة، أرسل تذكرة أدناه.`
          : `Confidence: ${conf}% · If not solved, submit a ticket below.`;
        aiBox.hidden = false;
        statusEl.textContent = '';
      } else {
        aiBox.hidden = true;
        statusEl.textContent = formType === 'ar'
          ? 'لا يوجد اقتراح. يرجى إرسال التذكرة.'
          : 'No suggestion. Please submit a ticket.';
      }
    } catch {
      aiBox.hidden = true;
      statusEl.textContent = formType === 'ar'
        ? 'تعذّر الحصول على الاقتراح.'
        : 'Could not get suggestion.';
    }
  }

  async function submitTicket(formType) {
    const statusEl = $(formType === 'ar' ? 'statusAr' : 'status');
    const data = getFormData(formType);

    if (!data.username || !data.email || !data.extension || !data.department || !data.issue) {
      statusEl.innerHTML = formType === 'ar'
        ? '<span class="err">رجاءً املأ جميع الحقول.</span>'
        : '<span class="err">Please fill all fields.</span>';
      return;
    }

    statusEl.textContent = formType === 'ar' ? 'جاري الإرسال…' : 'Submitting…';
    try {
      const res = await fetch('/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data) // server detects IP/PC name
      });
      const out = await res.json();
      if (out.ok) {
        statusEl.innerHTML = formType === 'ar'
          ? `<span class="ok">تم إرسال التذكرة بنجاح. رقم التذكرة: ${out.ticket}</span>`
          : `<span class="ok">Ticket submitted successfully. Ticket #: ${out.ticket}</span>`;
        // Reset the form and hide suggestion box
        if (formType === 'ar') {
          $('ticketFormAr')?.reset();
          const box = $('aiBoxAr'); if (box) box.hidden = true;
        } else {
          $('ticketForm')?.reset();
          const box = $('aiBox'); if (box) box.hidden = true;
        }
      } else {
        statusEl.innerHTML = `<span class="err">${out.error || (formType === 'ar' ? 'فشل الإرسال' : 'Submit failed')}</span>`;
      }
    } catch {
      statusEl.innerHTML = formType === 'ar'
        ? '<span class="err">خطأ في الشبكة أثناء الإرسال.</span>'
        : '<span class="err">Network error while submitting.</span>';
    }
  }

  // English form
  if ($('ticketForm')) {
    $('btnSuggest')?.addEventListener('click', () => getSuggestion('en'));
    let t; $('issue')?.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => getSuggestion('en'), 1000); });
    $('btnSolved')?.addEventListener('click', () => { $('status').innerHTML = '<span class="ok">Great! Issue resolved.</span>'; });
    $('btnNeedHelp')?.addEventListener('click', () => { const box = $('aiBox'); if (box) box.hidden = true; $('status').textContent = 'Okay — please submit the ticket.'; });
    $('ticketForm').addEventListener('submit', (e) => { e.preventDefault(); submitTicket('en'); });
  }

  // Arabic form
  if ($('ticketFormAr')) {
    $('btnSuggestAr')?.addEventListener('click', () => getSuggestion('ar'));
    let tAr; $('issueAr')?.addEventListener('input', () => { clearTimeout(tAr); tAr = setTimeout(() => getSuggestion('ar'), 1000); });
    $('btnSolvedAr')?.addEventListener('click', () => { $('statusAr').innerHTML = '<span class="ok">تم! تم حل المشكلة.</span>'; });
    $('btnNeedHelpAr')?.addEventListener('click', () => { const box = $('aiBoxAr'); if (box) box.hidden = true; $('statusAr').textContent = 'حسنًا — الرجاء إرسال التذكرة.'; });
    $('ticketFormAr').addEventListener('submit', (e) => { e.preventDefault(); submitTicket('ar'); });
  }
// ================== Self-service "My Tickets" widget ==================
(function () {
  // Find an email input on either page
  const emailEl = document.querySelector('#email, #emailAr, input[type="email"], input[name="email"]');
  if (!emailEl) return;

  // Create container if the page doesn't have one
  let section = document.getElementById('myTickets');
  if (!section) {
    section = document.createElement('div');
    section.id = 'myTickets';
    section.style.marginTop = '16px';
    section.innerHTML = `
      <hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb;">
      <h2 style="margin:8px 0 10px 0;font-size:18px;">My Tickets / تذاكري</h2>
      <div id="myTicketsBody" class="muted">Enter your email to load your tickets.</div>
    `;
    // Append right below the form (or at end of card)
    const form = document.getElementById('ticketForm') || document.querySelector('form');
    (form?.parentElement || document.body).appendChild(section);
  }
  const body = document.getElementById('myTicketsBody');

  function esc(s){ return String(s ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

  async function loadMyTickets() {
    const email = (emailEl.value || '').trim();
    if (!email) { body.textContent = 'Enter your email to load your tickets.'; return; }

    body.textContent = 'Loading...';
    try {
      const res = await fetch(`/api/my-tickets?email=${encodeURIComponent(email)}`);
      const data = await res.json();
      if (!data.ok) { body.textContent = data.error || 'Failed to load.'; return; }

      const rows = (data.tickets || []).sort((a,b) => (b.id - a.id)).map(t => {
        const sel = ['New','In Progress','Resolved','AI Suggested','Dismissed by AI']
          .map(s => `<option ${t.status===s?'selected':''}>${s}</option>`).join('');
        return `
          <tr>
            <td>${t.id}</td>
            <td>${esc(t.ts_local || t.ts_iso || '')}</td>
            <td>${esc(t.department || '')}</td>
            <td style="max-width:320px;white-space:pre-wrap">${esc(t.issue || '')}</td>
            <td>
              <select data-id="${t.id}" class="status">${sel}</select>
            </td>
            <td>
              <button class="save" data-id="${t.id}">Save</button>
              <button class="del"  data-id="${t.id}">Delete</button>
            </td>
          </tr>`;
      }).join('');

      body.innerHTML = (data.tickets?.length)
        ? `<div style="overflow:auto">
             <table style="width:100%;border-collapse:collapse">
               <thead>
                 <tr style="background:#f8fafc">
                   <th style="text-align:left;border-top:1px solid #e5e7eb;padding:8px">ID</th>
                   <th style="text-align:left;border-top:1px solid #e5e7eb;padding:8px">Submitted</th>
                   <th style="text-align:left;border-top:1px solid #e5e7eb;padding:8px">Dept</th>
                   <th style="text-align:left;border-top:1px solid #e5e7eb;padding:8px">Issue</th>
                   <th style="text-align:left;border-top:1px solid #e5e7eb;padding:8px">Status</th>
                   <th style="text-align:left;border-top:1px solid #e5e7eb;padding:8px">Actions</th>
                 </tr>
               </thead>
               <tbody>${rows}</tbody>
             </table>
           </div>`
        : 'No tickets found for this email.';
    } catch (e) {
      body.textContent = 'Network error.';
    }
  }

  // Save status
  body.addEventListener('click', async (ev) => {
    const btn = ev.target.closest('button.save');
    if (!btn) return;
    const id = Number(btn.dataset.id);
    const email = (emailEl.value || '').trim();
    const sel = body.querySelector(`select.status[data-id="${id}"]`);
    if (!sel) return;

    btn.disabled = true; btn.textContent = 'Saving...';
    try {
      const res = await fetch(`/api/my-tickets/${id}/status`, {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({ email, status: sel.value })
      });
      const data = await res.json();
      if (!data.ok) alert(data.error || 'Update failed');
      else await loadMyTickets();
    } finally {
      btn.disabled = false; btn.textContent = 'Save';
    }
  });

  // Delete ticket
  body.addEventListener('click', async (ev) => {
    const btn = ev.target.closest('button.del');
    if (!btn) return;
    const id = Number(btn.dataset.id);
    const email = (emailEl.value || '').trim();
    if (!confirm('Delete this ticket?')) return;

    btn.disabled = true; btn.textContent = 'Deleting...';
    try {
      const res = await fetch(`/api/my-tickets/${id}?email=${encodeURIComponent(email)}`, { method:'DELETE' });
      const data = await res.json();
      if (!data.ok) alert(data.error || 'Delete failed');
      else await loadMyTickets();
    } finally {
      btn.disabled = false; btn.textContent = 'Delete';
    }
  });

  // Auto-load when email changes (debounced)
  let t = null;
  function scheduleLoad(){ clearTimeout(t); t = setTimeout(loadMyTickets, 400); }
  emailEl.addEventListener('input', scheduleLoad);
  emailEl.addEventListener('change', scheduleLoad);

  // Also load after a successful submit (if your existing code sets a success flag)
  document.getElementById('ticketForm')?.addEventListener('submit', () => {
    setTimeout(loadMyTickets, 800);
  });

  // If the email is prefilled, load immediately
  if ((emailEl.value || '').trim()) loadMyTickets();
})();

});

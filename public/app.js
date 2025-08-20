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
});

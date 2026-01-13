let lang = 'ar';

function toggleLang(){
  document.querySelectorAll('[data-ar]').forEach(el=>{
    el.textContent = lang === 'ar'
      ? el.dataset.en
      : el.dataset.ar;
  });

  document.documentElement.dir = lang === 'ar' ? 'ltr' : 'rtl';

  document.querySelector('.lang-toggle').textContent =
    lang === 'ar' ? 'AR' : 'EN';

  lang = lang === 'ar' ? 'en' : 'ar';
}

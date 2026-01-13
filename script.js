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
  const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";
});

}


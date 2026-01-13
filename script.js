let lang = "ar";

/* -------- Language Toggle -------- */
function toggleLang() {
  document.querySelectorAll("[data-ar]").forEach(el => {
    el.textContent = lang === "ar" ? el.dataset.en : el.dataset.ar;
  });

  document.documentElement.dir = lang === "ar" ? "ltr" : "rtl";

  const langBtn = document.getElementById("langToggle");
  langBtn.textContent = lang === "ar" ? "AR" : "EN";

  lang = lang === "ar" ? "en" : "ar";
}

/* -------- Mobile Menu -------- */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

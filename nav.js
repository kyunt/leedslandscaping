document.addEventListener("DOMContentLoaded", () => {
  const primaryNav = document.querySelector(".primary-navigation");
  const navToggle = document.querySelector(".nav-toggle-icon");
  const heroMain = document.querySelector(".hero");
  const headerContainer = document.querySelector(".header-cont");

  const heroSub = document.querySelector("#sub-hero");

  navToggle.addEventListener("click", () => { 
    const visibility = primaryNav.getAttribute("data-visible");
    
    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
      heroMain.setAttribute("data-nav-open", true);
      headerContainer.setAttribute("data-nav-open", true);
      heroSub.setAttribute("data-nav-open", true);
    } else if (visibility === "true") {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
      heroMain.setAttribute("data-nav-open", false);
      headerContainer.setAttribute("data-nav-open", false);
      heroSub.setAttribute("data-nav-open", false);
    }
  });
});
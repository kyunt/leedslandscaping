const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav-toggle-icon");
const heroMain = document.querySelector(".hero");
const headerContainer = document.querySelector(".header-cont");
const headerContainerOther = document.querySelector(".header-cont-other");

navToggle.addEventListener("click", () => { 
  const visibility = primaryNav.getAttribute("data-visible");
  
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    heroMain.setAttribute("data-nav-open", true);
    headerContainer.setAttribute("data-nav-open", true);
    headerContainerOther.setAttribute("data-nav-open", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    heroMain.setAttribute("data-nav-open", false);
    headerContainer.setAttribute("data-nav-open", false);}
    headerContainerOther.setAttribute("data-nav-open", false);
});
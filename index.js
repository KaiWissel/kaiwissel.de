const SHOW_CLASS = "show";
const STICKY_ELEMENT = ".sticky-nav";
const SWITCH_STICKY = "landing-nav";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add(SHOW_CLASS);
      if (element.target.classList.value.includes(SWITCH_STICKY)) {
        const stickyNav = document.querySelectorAll(STICKY_ELEMENT)[0];
        stickyNav.classList.remove(SHOW_CLASS);
      }
    } else {
      if (element.target.classList.value.includes(SWITCH_STICKY)) {
        const stickyNav = document.querySelectorAll(STICKY_ELEMENT)[0];
        stickyNav.classList.add(SHOW_CLASS);
      }
      element.target.classList.remove(SHOW_CLASS);
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));

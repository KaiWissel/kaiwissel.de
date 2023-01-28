const SHOW_CLASS = "show";
const STICKY_ELEMENT = ".sticky-nav";
const REMOVE_STICKY_ON_ELEMENT = "landing-nav";
const ADD_STICKY_ON_ELEMENT = "landing-nav";

let switchNavWasOnceRemoved = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    const elementClassList = element.target.classList;
    if (element.isIntersecting) {
      if (
        elementClassList.value.includes(REMOVE_STICKY_ON_ELEMENT) ||
        elementClassList.value.includes(ADD_STICKY_ON_ELEMENT)
      ) {
        const stickyNav = document.querySelectorAll(STICKY_ELEMENT)[0];
        stickyNav.classList.remove(SHOW_CLASS);
        console.log("remove sticky");
      }
      if (
        elementClassList.value.includes("sticky-nav") &&
        !switchNavWasOnceRemoved
      )
        return;
      if (elementClassList.value.includes(REMOVE_STICKY_ON_ELEMENT))
        switchNavWasOnceRemoved = false;
      elementClassList.add(SHOW_CLASS);
    } else {
      if (elementClassList.value.includes(ADD_STICKY_ON_ELEMENT)) {
        const stickyNav = document.querySelectorAll(STICKY_ELEMENT)[0];
        stickyNav.classList.add(SHOW_CLASS);
        console.log("add sticky");
      }
      elementClassList.remove(SHOW_CLASS);
      if (elementClassList.value.includes(REMOVE_STICKY_ON_ELEMENT))
        switchNavWasOnceRemoved = true;
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));

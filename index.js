const observer = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add("show");
      if (element.target.classList.value.includes("logo")) {
        const stickyNav = document.querySelectorAll(".sticky-nav")[0];
        stickyNav.classList.remove("show");
      }
    } else {
      if (element.target.classList.value.includes("logo")) {
        const stickyNav = document.querySelectorAll(".sticky-nav")[0];
        stickyNav.classList.add("show");
      }
      element.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));

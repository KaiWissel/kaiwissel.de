const observer = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    console.log(element);
    if (element.isIntersecting) {
      element.target.classList.add("show");
      if (element.target.classList.value.includes("logo")) {
        console.log("logo is visible");
        const stickyNav = document.querySelectorAll(".sticky-nav")[0];

        console.log("SN: ", stickyNav);
        stickyNav.classList.remove("show");
      }
    } else {
      if (element.target.classList.value.includes("logo")) {
        console.log("logo is not visible");
        const stickyNav = document.querySelectorAll(".sticky-nav")[0];

        console.log("SN: ", stickyNav);
        stickyNav.classList.add("show");
      }
      element.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));

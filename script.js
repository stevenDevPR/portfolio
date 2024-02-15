document.addEventListener("DOMContentLoaded", function () {
  // Menu icon click
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  // Tabs for information content
  let toggleButtons = document.querySelectorAll(".toggleButton");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      var paragraph = this.nextElementSibling; // Select the next sibling (the <p> element)
      paragraph.classList.toggle("show-paragraph");
    });
  });

  // Scroll sections
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.addEventListener("scroll", handleScroll);

  function handleScroll() {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        // Active navbar links
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        });

        // Active sections for animation scroll
        sec.classList.add("show-animate");
      } else {
        sec.classList.remove("show-animate");
      }
    });

    // Sticky header
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
  }
});

document.addEventListener("DOMContentLoaded", () => {
    // ================== DESKTOP NAVBAR - About Hover Dropdown ==================
    const aboutLink = document.getElementById("about-link");
    const aboutDropdown = document.getElementById("about-dropdown");
  
    if (aboutLink && aboutDropdown) {
      aboutLink.addEventListener("mouseenter", () => aboutDropdown.classList.remove("hidden"));
      aboutDropdown.addEventListener("mouseenter", () => aboutDropdown.classList.remove("hidden"));
      aboutDropdown.addEventListener("mouseleave", () => aboutDropdown.classList.add("hidden"));
      aboutLink.addEventListener("mouseleave", () => {
        setTimeout(() => {
          if (!aboutDropdown.matches(":hover")) {
            aboutDropdown.classList.add("hidden");
          }
        }, 200);
      });
    }
  
    // ================== MOBILE MENU ==================
    const btn = document.getElementById("mobileMenuBtn");
    const dropdown = document.getElementById("mobileDropdown");
  
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const bar3 = document.getElementById("bar3");
  
    if (btn && dropdown && bar1 && bar2 && bar3) {
      btn.addEventListener("click", () => {
        dropdown.classList.toggle("hidden");
  
        bar1.classList.toggle("rotate-45");
        bar1.classList.toggle("translate-y-1.5");
  
        bar2.classList.toggle("opacity-0");
  
        bar3.classList.toggle("-rotate-45");
        bar3.classList.toggle("-translate-y-1.5");
      });
  
      // ========== Close mobile menu on link click ==========
      document.querySelectorAll("#mobileDropdown a").forEach(link => {
        link.addEventListener("click", () => {
          dropdown.classList.add("hidden");
  
          bar1.classList.remove("rotate-45", "translate-y-1.5");
          bar2.classList.remove("opacity-0");
          bar3.classList.remove("-rotate-45", "-translate-y-1.5");
        });
      });
    }
  
    // ================== MOBILE ABOUT DROPDOWN ==================
    const aboutToggle = document.getElementById("aboutToggle");
    const mobileAboutDropdown = document.getElementById("aboutDropdown");
    const aboutArrow = document.getElementById("aboutArrow");
  
    if (aboutToggle && mobileAboutDropdown && aboutArrow) {
      aboutToggle.addEventListener("click", () => {
        mobileAboutDropdown.classList.toggle("hidden");
        aboutArrow.classList.toggle("rotate-180");
      });
    }
  });
  
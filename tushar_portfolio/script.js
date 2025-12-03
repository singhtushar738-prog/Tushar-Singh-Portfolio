// Dark / Light mode + simple section animations

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggleBtn = document.getElementById("theme-toggle");
  const fadeSections = document.querySelectorAll(".fade-section");

  // --- Load saved theme (if any) ---
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-theme");
  }

  // --- Update toggle button text ---
  function updateToggleText() {
    if (!toggleBtn) return;
    if (body.classList.contains("light-theme")) {
      toggleBtn.textContent = "Dark Mode";
    } else {
      toggleBtn.textContent = "Light Mode";
    }
  }

  updateToggleText();

  // --- Toggle theme on button click ---
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("light-theme");
      const theme = body.classList.contains("light-theme") ? "light" : "dark";
      localStorage.setItem("theme", theme);
      updateToggleText();
    });
  }

  // --- Fade-in main card when page loaded ---
  window.addEventListener("load", () => {
    body.classList.add("page-loaded");
    revealOnScroll();
  });

  // --- Scroll-based fade-in animation for sections ---
  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    fadeSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        section.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
});

function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => {
    section.style.display = section.id === sectionId ? "block" : "none";
  });

  const buttons = document.querySelectorAll(".toggle-btn");
  buttons.forEach((button) => {
    button.classList.toggle(
      "active",
      button.getAttribute("onclick").includes(sectionId)
    );
  });
}

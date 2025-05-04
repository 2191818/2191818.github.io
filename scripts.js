function toggleSection(sectionToShow) {
  // Hide all sections
  document.getElementById("projects").style.display = "none";
  document.getElementById("skills").style.display = "none";

  // Show the selected section
  document.getElementById(sectionToShow).style.display = "block";

  // Toggle button active states
  const buttons = document.querySelectorAll(".toggle-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.textContent.trim().toLowerCase() === sectionToShow) {
      btn.classList.add("active");
    }
  });
}

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

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide(step) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

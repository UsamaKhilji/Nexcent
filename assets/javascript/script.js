let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;
  document.querySelector(".carousel-inner").style.transform = `translateX(-${
    currentSlide * 100
  }%)`;
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    nextSlide();
  }, 5000);
});

function showSidebar() {
  const sidebar = document.querySelector("#side-bar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector("#side-bar");
  sidebar.style.display = "none";
}

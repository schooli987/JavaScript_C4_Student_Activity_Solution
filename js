const carousel = document.getElementById("amazonCarousel");
const dots = document.querySelectorAll(".dot");
const totalSlides = carousel.children.length;

let index = 0;
let interval;

//Activity 1

// Slide only
function updateSlide() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  updateSlide();
  updateDots();
}

// Auto play
function startAuto() {
  interval = setInterval(nextSlide, 4000);
}

// Init
startAuto();

//Activity 2
function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlide();
  updateDots();
}
//update in HTML when arraow button click

//activity 3
// Dot click
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    index = Number(dot.dataset.slide);
    updateSlide();
    updateDots();
  });
});

// Dots only
function updateDots() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

//Additional activity
function stopAuto() {
  clearInterval(interval);
}

// Pause on hover
carousel.parentElement.addEventListener("mouseenter", stopAuto);
carousel.parentElement.addEventListener("mouseleave", startAuto);

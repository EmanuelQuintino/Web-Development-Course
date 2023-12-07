const $carouselImages = document.querySelector(".carouselImages");
const $nextButton = document.querySelector(".nextButton img");
const $previousButton = document.querySelector(".previousButton img");

function nextImage() {
  let firstCarouselImage = document.querySelectorAll(".carouselImages img")[0];

  $carouselImages.style.marginLeft = "-200%";
  $carouselImages.style.transition = "margin-left 1s";

  setTimeout(() => {
    $carouselImages.style.transition = "none";
    $carouselImages.insertAdjacentElement("beforeend", firstCarouselImage);
    $carouselImages.style.marginLeft = "-100%";
  }, 1000);
}

function previousImage() {
  let arrayCarouselImages = document.querySelectorAll(".carouselImages img");
  let lastCarouselImage = arrayCarouselImages[arrayCarouselImages.length - 1];

  $carouselImages.style.marginLeft = "0%";
  $carouselImages.style.transition = "margin-left 1s";

  setTimeout(() => {
    $carouselImages.style.transition = "none";
    $carouselImages.insertAdjacentElement("afterbegin", lastCarouselImage);
    $carouselImages.style.marginLeft = "-100%";
  }, 1000);
}

let intervalNextImage = setInterval(nextImage, 2000);

$nextButton.addEventListener("click", () => {
  clearInterval(intervalNextImage);
  nextImage();
});
$previousButton.addEventListener("click", () => {
  clearInterval(intervalNextImage);
  previousImage();
});

$nextButton.addEventListener("mouseover", () => {
  clearInterval(intervalNextImage);
});
$previousButton.addEventListener("mouseover", () => {
  clearInterval(intervalNextImage);
});

$carouselImages.addEventListener("mouseover", () => {
  clearInterval(intervalNextImage);
});
$carouselImages.addEventListener("mouseleave", () => {
  intervalNextImage = setInterval(nextImage, 2000);
});

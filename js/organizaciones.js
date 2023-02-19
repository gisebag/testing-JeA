const images = document.querySelector('.carousel-images');
const carouselArrowLeft = document.querySelector('.carousel-arrow-left');
const carouselArrowRight = document.querySelector('.carousel-arrow-right');

let currentImageIndex = 0;

carouselArrowLeft.addEventListener('click', () => {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    images.style.transform = `translateX(-${currentImageIndex * 20}%)`;
  }
});

carouselArrowRight.addEventListener('click', () => {
  if (currentImageIndex < 4) {
    currentImageIndex++;
    images.style.transform = `translateX(-${currentImageIndex * 20}%)`;
  }
});
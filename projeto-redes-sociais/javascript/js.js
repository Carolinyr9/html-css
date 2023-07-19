window.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const prevBtn = carousel.querySelector('.carousel-control.prev');
    const nextBtn = carousel.querySelector('.carousel-control.next');
    const carouselItems = carousel.querySelectorAll('.carousel-item');
  
    let currentIndex = 0;
    const itemWidth = carouselItems[0].offsetWidth;
  
    prevBtn.addEventListener('click', function(event) {
      event.preventDefault();
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
      carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    });
  
    nextBtn.addEventListener('click', function(event) {
      event.preventDefault();
      currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
      carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    });
  });
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelector('.slides');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;


function goToNextSlide() {
    if (currentIndex < slides.children.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function goToPrevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.children.length - 1; 
    }
    updateCarousel();
}

function updateCarousel() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[currentIndex].classList.add('active');
}

nextButton.addEventListener('click', goToNextSlide);

prevButton.addEventListener('click', goToPrevSlide);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

updateCarousel();
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

function updateSlider() {
    const offset = -currentIndex * 600;
    slides.style.transform = `translateX(${offset}px)`;

    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

let autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
}, 8000); 

updateSlider();

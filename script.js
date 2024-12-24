const slides = document.querySelectorAll('input[type=radio]');
let currentIndex = 0;

function autoSlide() {
    // Uncheck the current radio button
    slides[currentIndex].checked = false;

    // Move to the next slide, or loop back to the first one
    currentIndex = (currentIndex + 1) % slides.length;

    // Check the next radio button
    slides[currentIndex].checked = true;
}

// Set the interval for automatic sliding (e.g., 5 seconds)
setInterval(autoSlide, 5000);

const product = [];
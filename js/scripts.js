let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const intervalTime = 60000; // 1 minute

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, intervalTime);

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('sambutan-text');
    const text = textElement.innerHTML;
    textElement.innerHTML = '';

    let i = 0;
    const typingSpeed = 50; // Adjust typing speed (milliseconds)

    function typeWriter() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            textElement.style.borderRight = 'none'; // Remove cursor after typing is complete
        }
    }

    typeWriter();
});

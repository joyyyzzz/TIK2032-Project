function fadeIn(element, audioId) {
    element.style.opacity = 0;
    let opacity = 0;

    const audio = document.getElementById(audioId);

    element.addEventListener("mouseenter", function() {
        audio.play();
    });

    element.addEventListener("mouseleave", function() {
        audio.pause();
        audio.currentTime = 0; // Mengembalikan audio ke awal saat dihentikan
    });

    const fadeEffect = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeEffect);
        }
    }, 100);
}

document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll('.gallery-content img');
    galleryImages.forEach((image, index) => fadeIn(image, "audio" + (index + 1)));
});

const text = document.querySelector('.content h1');
const textContent = text.textContent;
const textLength = textContent.length;
let index = 0;
let animationTimeout;

function animateText() {
    if (index < textLength) {
        const animatedText = textContent.slice(0, index + 1);
        text.textContent = animatedText;
        index++;
        animationTimeout = setTimeout(animateText, 100);
    }
}

animateText();
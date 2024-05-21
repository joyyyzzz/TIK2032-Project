// File: contact.js
const text = document.querySelector('.header h2');
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


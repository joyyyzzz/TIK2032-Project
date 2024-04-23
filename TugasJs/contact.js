document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        var fullName = document.querySelector('input[name="fullName"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var message = document.querySelector('textarea').value;

        console.log("Full Name:", fullName);
        console.log("Email:", email);
        console.log("Message:", message);

        form.reset();
    });
});

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
// Menambahkan event listener untuk form pengiriman pesan
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir secara default

        // Mengambil nilai dari input dan textarea
        var fullName = document.querySelector('input[name="fullName"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var message = document.querySelector('textarea').value;

        // Kirim data ke server atau lakukan apa pun yang Anda inginkan di sini
        // Misalnya, Anda bisa mengirim data menggunakan AJAX atau mengirimnya ke endpoint API

        // Contoh: Menampilkan data yang dikirim di konsol
        console.log("Full Name:", fullName);
        console.log("Email:", email);
        console.log("Message:", message);

        // Bersihkan formulir setelah data dikirim
        form.reset();
    });
});

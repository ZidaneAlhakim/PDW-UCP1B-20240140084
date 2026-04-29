// gallery-script.js

// 1. Kontrol Audio & Alert
const myAudio = document.getElementById('myAudio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');

playBtn.addEventListener('click', () => {
    myAudio.play();
    alert("Audio podcast sedang diputar!"); // Memenuhi syarat memunculkan alert
});

pauseBtn.addEventListener('click', () => {
    myAudio.pause();
});

// 2. Kontrol Ganti Gambar
const galleryImage = document.getElementById('galleryImage');
const changeImgBtn = document.getElementById('changeImgBtn');

let isImage1 = true;
changeImgBtn.addEventListener('click', () => {
    if (isImage1) {
        galleryImage.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80"; // Gambar Cyber
    } else {
        galleryImage.src = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80"; // Gambar Event
    }
    isImage1 = !isImage1;
});
let currentIndex = 0;
let images = [];

function openLightbox(element) {
  images = Array.from(document.querySelectorAll('.image img'));
  currentIndex = images.indexOf(element.querySelector('img'));
  document.querySelector('.lightbox-img').src = images[currentIndex].src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.querySelector('.lightbox-img').src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.querySelector('.lightbox-img').src = images[currentIndex].src;
}

function filterImages(category) {
  const allImages = document.querySelectorAll('.image');
  allImages.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

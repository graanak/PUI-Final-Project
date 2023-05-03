const img = document.querySelectorAll('.grid-item img');
const overlay = document.querySelector('.overlay');

img.forEach(img => {
  img.addEventListener('click', function() {
    const enlargedImg = document.createElement('img');
    enlargedImg.src = this.src;
    enlargedImg.classList.add('enlarged-img');

    overlay.appendChild(enlargedImg);
    overlay.classList.add('active');
  });
});

overlay.addEventListener('click', function() {
    const enlargedImg = document.querySelector('.enlarged-img');
    this.classList.remove('active');
    this.removeChild(enlargedImg);
  });
  

document.addEventListener('mousemove', function(event) {
    const enlargedImg = document.querySelector('.enlarged-img');
  
    if (enlargedImg) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const imgWidth = w * 0.8;
      const imgHeight = h * 0.8;
  
      enlargedImg.style.width = imgWidth + 'px';
      enlargedImg.style.height = imgHeight + 'px';
      enlargedImg.style.left = (w / 2 - imgWidth / 2) + 'px';
      enlargedImg.style.top = (h / 2 - imgHeight / 2) + 'px';
    }
  });
  


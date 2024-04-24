setTimeout(function() {
    window.location.href = 'pgato.html';
  }, 5000); 
  document.addEventListener('DOMContentLoaded', function() {
      const heartRain = document.getElementById('heart-rain');
    
      function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heartRain.appendChild(heart);
    
        setTimeout(() => {
          heart.remove();
        }, 15000);
      }
    
      setInterval(createHeart, 300);
    });
   
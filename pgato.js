document.addEventListener('DOMContentLoaded', function() {
  const inicioAudio = document.getElementById('inicio-audio');
  inicioAudio.play();
});
document.addEventListener("DOMContentLoaded", function() {
    var imagen = document.getElementById("imagen");
    var siButton = document.getElementById("si-button");
    var index = 1; // Índice de la imagen actual

    siButton.addEventListener("click", function() {
        // Cambiar la imagen al siguiente índice
        index = (index % 8) + 1; // Modificar el rango si tienes más imágenes
        imagen.src = "imagen/" + index + ".jpg"; // Cambiar el nombre de la imagen con la ruta al directorio "imagen/"
    });
});
const noButton = document.getElementById('no-button');
noButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});
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
      }, 5000);
    }
  
    setInterval(createHeart, 300);
  });
  
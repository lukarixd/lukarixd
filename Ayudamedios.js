
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var badThings = document.getElementById('badThings').value.trim();
    if (badThings !== '') {
        alert('Has escrito: ' + badThings);
        // Aquí puedes hacer algo con los datos, como enviarlos a una base de datos o mostrarlos en otra parte de la página
    } else {
        alert('Por favor, escribe al menos una cosa mala.');
    }
});
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var badThing1 = document.getElementsByName('badThing1')[0].value.trim();
    var badThing2 = document.getElementsByName('badThing2')[0].value.trim();
    var badThing3 = document.getElementsByName('badThing3')[0].value.trim();
    if (badThing1 !== '' && badThing2 !== '' && badThing3 !== '') {
        const siButton = document.getElementById('form');
        siButton.addEventListener('click', () => {
            window.location.href = 'protocolo.html'; 
        });
        
    } else {
        alert('Por favor, completa todas las cosas malas.');
    }
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
 
 
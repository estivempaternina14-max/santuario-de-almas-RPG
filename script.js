// Generar estrellas cayendo
const starsContainer = document.getElementById('stars-container');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = Math.random() * 3 + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDuration = (Math.random() * 5 + 3) + 's';
    star.style.animationDelay = Math.random() * 5 + 's';
    starsContainer.appendChild(star);
}

// Cambio de pestañas
function switchTab(tab) {
    document.getElementById('form-registro').style.display = tab === 'register' ? 'block' : 'none';
    document.getElementById('form-login').style.display = tab === 'login' ? 'block' : 'none';
    const buttons = document.querySelectorAll('.tab-btn');
    buttons[0].classList.toggle('active', tab === 'register');
    buttons[1].classList.toggle('active', tab === 'login');
}

// Iniciar juego
const forms = document.querySelectorAll('.auth-form');
const jugador = document.getElementById('jugador');
const tarjeta = document.getElementById('tarjeta-contenedor');

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        document.body.classList.add('game-started');
        tarjeta.style.display = 'none';
        starsContainer.remove();
        jugador.style.display = 'block';
        
        // Posicionar jugador al centro
        jugador.style.left = (window.innerWidth / 2 - 32) + 'px';
        jugador.style.top = (window.innerHeight / 2 - 32) + 'px';
    });
});

// Movimiento del jugador
document.addEventListener('keydown', (e) => {
    if (jugador.style.display === 'block') {
        let bgY = '0%';
        switch (e.key) {
            case 'ArrowDown':
                bgY = '0%';
                break;
            case 'ArrowRight':
                bgY = '-100%';
                break;
            case 'ArrowLeft':
                bgY = '-66%';
                break;
            case 'ArrowUp':
                bgY = '-33%';
                break;
            default:
                return;
        }
        jugador.style.backgroundPosition = `0% ${bgY}`;
    }
});
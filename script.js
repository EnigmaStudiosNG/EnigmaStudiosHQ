document.addEventListener('DOMContentLoaded', function() {
    // Simular tiempo de carga (ajustado a 4 segundos)
    setTimeout(function() {
        // Ocultar overlay de carga
        var overlay = document.querySelector('.overlay');
        overlay.classList.add('fade-out');

        // Detectar final de animación de fade-out
        overlay.addEventListener('animationend', function() {
            // Ocultar completamente el overlay
            overlay.style.display = 'none';
        });
    }, 4000); // Tiempo de carga simulado en milisegundos (4000 = 4 segundos)

    // Función para manejar el botón de "Mapa De Equipo"
    document.getElementById('teamMapButton').addEventListener('click', function() {
        var password = prompt("Ingrese la clave para acceder al Mapa De Equipo:");

        if (password === 'EnigmaMPR2') {
            window.location.href = 'markmap.html';
        } else {
            alert('Clave incorrecta. Inténtelo de nuevo.');
        }
    });
});

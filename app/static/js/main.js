// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('header nav ul');
    const header = document.querySelector('header');
    const logoImg = document.querySelector('.logo-img');

    // Función para mostrar u ocultar el menú en móviles
    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });

    // Función para achicar el header al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('smaller');
            logoImg.style.width = '100px'; // Tamaño pequeño cuando baja
        } else {
            header.classList.remove('smaller');
            logoImg.style.width = '150px'; // Tamaño original arriba
        }
    });
});


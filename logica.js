/* #########################################################################################
############################################################################################
############################################################################################
############################################################################################ */
// Animación opciones barra lateral
var el = document.getElementById("bot");
anime({
    targets: el,
    translateX: 400,
    duration: 1800
});
/* #########################################################################################
############################################################################################
############################################################################################
############################################################################################ */
// Configuración para mostrar los elementos de la barra lateral cuando interviene @media
const toggleButton = document.getElementById("toggleButton");
const menuDiv = document.getElementById("menuDiv");

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const menuDiv = document.getElementById('menuDiv');

    toggleButton.addEventListener('click', function () {
        menuDiv.classList.toggle('oculto');
    });
});
/* #########################################################################################
############################################################################################
############################################################################################
############################################################################################ */
// configuración para mostar u ocultar los inputs de creación de perfil
document.addEventListener('DOMContentLoaded', function () {
    const btnTipoUsuario = document.querySelectorAll('.btn-tipo-usuario');
    const camposCamionero = document.querySelector('.campos-camionero');
    const camposEmpresa = document.querySelector('.campos-empresa');

    camposCamionero.style.display = 'none';
    camposEmpresa.style.display = 'none';

    btnTipoUsuario.forEach(btn => {
        btn.addEventListener('click', () => {
            const tipoUsuario = btn.getAttribute('data-tipo');
            if (tipoUsuario === 'camionero') {
                camposCamionero.style.display = camposCamionero.style.display === 'block' ? 'none' : 'block';
                camposEmpresa.style.display = 'none';
            } else if (tipoUsuario === 'empresa') {
                camposEmpresa.style.display = camposEmpresa.style.display === 'block' ? 'none' : 'block';
                camposCamionero.style.display = 'none';
            }
        });
    });
});
/* #########################################################################################
############################################################################################
############################################################################################
############################################################################################ */







var el = document.getElementById("bot");

anime({
    targets: el,
    translateX: 400,
    duration: 1800
});


// Obtén una referencia al botón toggle
const toggleButton = document.getElementById("toggleButton");
const menuDiv = document.getElementById("menuDiv");

// Agrega un event listener solo cuando estás en orientación vertical
function addToggleListener() {
    toggleButton.addEventListener("click", toggleMenu);
}

function removeToggleListener() {
    toggleButton.removeEventListener("click", toggleMenu);
}

if (window.innerWidth <= window.innerHeight) {
    addToggleListener();
}

// Agrega un event listener al evento resize
window.addEventListener("resize", () => {
    if (window.innerWidth <= window.innerHeight) {
        addToggleListener();
        if (menuDiv.style.display === "block") {
            menuDiv.style.display = "none"; // Ocultar el menú al cambiar a orientación vertical
        }
    } else {
        removeToggleListener();
        if (menuDiv.style.display === "none") {
            menuDiv.style.display = "block"; // Mostrar el menú al cambiar a orientación horizontal
        }
    }
});

const btnTipoUsuario = document.querySelectorAll('.btn-tipo-usuario');
const camposUsuario = document.querySelectorAll('.campos-usuario');

camposUsuario.forEach(campos => {
    campos.style.display = 'none';
});

btnTipoUsuario.forEach(btn => {
    btn.addEventListener('click', () => {
        const tipoUsuario = btn.getAttribute('data-tipo');
        camposUsuario.forEach(campos => {
            if (campos.classList.contains(`campos-${tipoUsuario}`)) {
                campos.style.display = 'block';
            } else {
                campos.style.display = 'none';
            }
        });
    });
});


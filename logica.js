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
//Permiso del usuario para la geolocalización
document.addEventListener('DOMContentLoaded', function () {
    const btnTipoUsuario = document.querySelectorAll('.btn-tipo-usuario');

    btnTipoUsuario.forEach(btn => {
        btn.addEventListener('click', async () => {
            const tipoUsuario = btn.getAttribute('data-tipo');
            if (tipoUsuario === 'camionero') {
                const permission = await Swal.fire({
                    title: 'Permiso de Geolocalización',
                    text: 'Este software funciona con geolocalización. ¿Deseas permitir que se acceda a tu ubicación?',
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonText: 'Sí',
                    cancelButtonText: 'No'
                });

                if (permission.isConfirmed) {
                    obtenerUbicacion(); // Llama a la función para obtener la ubicación
                } else {
                    // El usuario denegó el permiso, puedes mostrar un mensaje o realizar otra acción
                }
            }
        });
    });
});

// Función para obtener la ubicación y el territorio
function obtenerUbicacion() {
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;

        // Utiliza la API de Google Maps para obtener el territorio en español
        const geocoder = new google.maps.Geocoder();
        const latLng = new google.maps.LatLng(latitud, longitud);

        geocoder.geocode({ location: latLng, language: 'es' }, function(results, status) {
            if (status === "OK") {
                if (results[0]) {
                    const territorio = results[0].formatted_address;
                    Swal.fire({
                        icon: 'success',
                        title: 'Ubicación obtenida',
                        text: 'Territorio: ' + territorio
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error de Geocodificación',
                        text: 'No se encontró territorio para las coordenadas proporcionadas.'
                    });
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error de Geocodificación',
                    text: 'No se pudo obtener el territorio.'
                });
            }
        });
    }, function(error) {
        // En caso de error al obtener la ubicación
        Swal.fire({
            icon: 'error',
            title: 'Error de Ubicación',
            text: 'No se pudo obtener la ubicación.'
        });
    });
}


/* #########################################################################################
############################################################################################
############################################################################################
############################################################################################ */







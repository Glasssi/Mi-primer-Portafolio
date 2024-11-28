// Script para manejo del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        alert('¡Mensaje enviado correctamente!');
        // Aquí podrías agregar lógica para enviar el formulario (por ejemplo, con AJAX)
    } else {
        alert('Por favor, completa todos los campos');
    }
});

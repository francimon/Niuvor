document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío por defecto del formulario

        // Simula un envío exitoso
        formMessage.style.color = 'green';
        formMessage.textContent = '✅ ¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.';

        // Opcional: Limpiar el formulario después de 3 segundos
        setTimeout(() => {
            form.reset();
            formMessage.textContent = '';
        }, 3000);

        // NOTA: Para un sitio en producción, esta información debería enviarse a un servidor/email.
    });
});

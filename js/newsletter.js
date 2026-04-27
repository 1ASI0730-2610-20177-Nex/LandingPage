/* Formulario de suscripción (lead) */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-suscripcion");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email-boletin").value;
        const mensaje = document.getElementById("mensaje-suscripcion");
        if (!mensaje) return;

        console.log("Nuevo lead capturado:", email);

        mensaje.innerText =
            "¡Gracias por unirte a la revolución energética! Te hemos enviado un correo de confirmación.";
        mensaje.style.display = "block";

        form.reset();

        setTimeout(() => {
            mensaje.style.display = "none";
        }, 4000);
    });
});

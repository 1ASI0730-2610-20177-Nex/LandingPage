/* Música de fondo: botón flotante */
document.addEventListener("DOMContentLoaded", () => {
    const musica = document.getElementById("music");
    const btnAudio = document.getElementById("btn-audio");
    const iconoAudio = document.getElementById("icono-audio");

    if (!musica || !btnAudio || !iconoAudio) return;

    musica.volume = 0.3;
    let estaReproduciendo = false;

    btnAudio.addEventListener("click", () => {
        if (estaReproduciendo) {
            musica.pause();
            iconoAudio.classList.remove("fa-volume-up");
            iconoAudio.classList.add("fa-volume-off");
        } else {
            musica.play();
            iconoAudio.classList.remove("fa-volume-off");
            iconoAudio.classList.add("fa-volume-up");
        }
        estaReproduciendo = !estaReproduciendo;
    });
});

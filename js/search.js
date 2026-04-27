/* Buscador: palabra clave → desplazamiento a sección */
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const btnBuscar = document.getElementById("btn-buscar");

    if (!searchInput || !btnBuscar) return;

    const diccionarioSecciones = {
        inicio: "hero",
        descripcion: "description",
        "que es": "description",
        startup: "description",
        objetivos: "goals",
        mision: "goals",
        servicios: "service",
        planes: "service",
        precios: "service",
        gratis: "service",
        pagos: "service",
        testimonios: "reviews",
        opiniones: "reviews",
        "que dice la gente": "reviews",
        nosotros: "about",
        about: "about",
        equipo: "about",
        team: "about",
        enchufes: "device",
        dispositivos: "device",
        hardware: "device",
        soporte: "contact",
        contacto: "contact",
        boletin: "contact"
    };

    const realizarBusqueda = () => {
        const termino = searchInput.value.toLowerCase().trim();
        if (termino === "") return;

        let seccionEncontrada = null;

        for (const [clave, idSeccion] of Object.entries(diccionarioSecciones)) {
            if (termino.includes(clave)) {
                seccionEncontrada = document.getElementById(idSeccion);
                break;
            }
        }

        if (seccionEncontrada) {
            seccionEncontrada.scrollIntoView({ behavior: "smooth" });
            searchInput.value = "";
        } else {
            alert(`No encontramos resultados para "${termino}". Intenta buscar "planes", "hardware" o "soporte".`);
        }
    };

    btnBuscar.addEventListener("click", realizarBusqueda);
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            realizarBusqueda();
        }
    });
});

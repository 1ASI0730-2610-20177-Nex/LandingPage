document.addEventListener("DOMContentLoaded", function() {
    const faqQ1 = document.querySelectorAll(".faq_q1");

    faqQ1.forEach(question => {
        question.addEventListener("click", function() {
            // Alternar la clase 'active' en el botón
            this.classList.toggle("active");

            // Controlar el panel de respuesta
            const answer = this.nextElementSibling;
            if (this.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = 0;
            }

            // Opcional: Cerrar las otras preguntas cuando se abre una
            faqQ1.forEach(otherQuestion => {
                if (otherQuestion !== this && otherQuestion.classList.contains("active")) {
                    otherQuestion.classList.remove("active");
                    otherQuestion.nextElementSibling.style.maxHeight = 0;
                }
            });
        });
    });
    const faqQ2 = document.querySelectorAll(".faq_q2");

    faqQ2.forEach(question => {
        question.addEventListener("click", function() {
            // Alternar la clase 'active' en el botón
            this.classList.toggle("active");

            // Controlar el panel de respuesta
            const answer = this.nextElementSibling;
            if (this.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = 0;
            }

            // Opcional: Cerrar las otras preguntas cuando se abre una
            faqQ2.forEach(otherQuestion => {
                if (otherQuestion !== this && otherQuestion.classList.contains("active")) {
                    otherQuestion.classList.remove("active");
                    otherQuestion.nextElementSibling.style.maxHeight = 0;
                }
            });
        });
    });
    const faqQ3 = document.querySelectorAll(".faq_q3");

    faqQ3.forEach(question => {
        question.addEventListener("click", function() {
            // Alternar la clase 'active' en el botón
            this.classList.toggle("active");

            // Controlar el panel de respuesta
            const answer = this.nextElementSibling;
            if (this.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = 0;
            }

            // Opcional: Cerrar las otras preguntas cuando se abre una
            faqQ3.forEach(otherQuestion => {
                if (otherQuestion !== this && otherQuestion.classList.contains("active")) {
                    otherQuestion.classList.remove("active");
                    otherQuestion.nextElementSibling.style.maxHeight = 0;
                }
            });
        });
    });
});

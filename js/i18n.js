/* Traducciones ES/EN y toggle de idioma (expuesto para onclick en header) */
const translations = {
    es: {
        nav_home: "Inicio",
        nav_desc: "Descripción",
        nav_goals: "Objetivos",
        nav_plans: "Planes",
        nav_reviews: "Testimonios",
        nav_about: "Nosotros",
        nav_smart: "Enchufes Smart",
        nav_support: "Soporte",
        "meta.testimonialsSlider": "Carrusel de opiniones de clientes",
        "meta.sliderPrev": "Comentarios anteriores",
        "meta.sliderNext": "Comentarios siguientes",
        testimonials_sectionTitle: "Lo que dicen nuestros clientes",
        testimonials_rolePremium: "Cliente Premium",
        testimonials_roleFree: "Usuario gratuito",
        testimonials_q1: '"ElectroCorp.Web me muestra qué electrodoméstico gasta de verdad en nuestro hogar. Bajé el recibo sin volver a cablear la casa ni contratar técnicos de más; por fin se siente energía inteligente, no un lujo inalcanzable."',
        testimonials_q2: '"Montamos el sistema en nuestros interruptores y enchufes en una tarde: sin muros rotos y sin tocar el tablero. Ese enfoque plug-and-play es lo que nos convenció; otras apps genéricas nunca calzaban con nuestro consumo real en el Perú."',
        testimonials_q3: '"Programo enchufes y veo el consumo al instante. Me avisó cuando un equipo quedó toda la noche encendido; la luz de casa ya era un dolor, y ahora tengo un control concreto."',
        testimonials_q4: '"La plataforma web se entiende; no es otro panel inentendible. Veo el consumo local tal como ocurre y planifico con datos, no a ciegas con el recibo."',
        testimonials_q5: '"Lo manejamos todo con ElectroCorp.Web: encendido remoto, horarios y monitoreo en la app. En nuestra familia, democratizar la domótica y bajar el costo eléctrico es el sentido, y acá la primera solución que se siente alcanzable."',
        about_title: "Nosotros",
        about_lead: "Estudiantes de Ingeniería de Software de la UPC impulsando ElectroCorp.Web",
        about_role_diego: "Lógica y enfoque backend",
        about_bio_diego: "Estudiante de Ingeniería de Software en UPC. C++, HTML, CSS, JavaScript, C#, Python y Java. Aporta estructura backend y APIs en ElectroCorp.Web.",
        about_role_seb: "Datos y monitoreo",
        about_bio_seb: "Estudiante de Ingeniería de Software en UPC. C++, HTML, CSS, JavaScript. Flujos de datos, métricas y vistas de consumo en la plataforma.",
        about_role_gho: "Lógica e integración",
        about_bio_gho: "Estudiante de Ingeniería de Software en UPC. C++, HTML, CSS y JavaScript. Conecta servicios y piezas de punta a punta.",
        about_role_alex: "UI / UX y frontend",
        about_bio_alex: "Estudiante de Ingeniería de Software en UPC. C++, HTML, CSS, JavaScript, C#, Python, Java y Flutter. Diseño e interfaz de la plataforma ElectroCorp.Web y la app.",
        about_role_ronal: "Lógica y calidad",
        about_bio_ronal: "Estudiante de Ingeniería de Software en UPC. C++, HTML, CSS y JavaScript. Calidad de código, pruebas y entregas estables entre funcionalidades.",
        nav_login: "Iniciar sesión",
        nav_register: "Registrarse",
        hero_title: "Domina el consumo de tu hogar",
        hero_dashboard: "Ir al dashboard",
        hero_subtitle: "La fusión definitiva entre Sensores IoT e Inteligencia de Consumo.",
        desc_title: "Descripción de la Start-Up",
        desc_text1: "Es una startup de tecnología enfocada en democratizar la domótica y la eficiencia energética para los hogares peruanos.",
        desc_text2: "Actualmente, el convertir una casa tradicional en un 'hogar inteligente' es percibido como un lujo costoso, que requiere modificar el cableado eléctrico, contratar técnicos especializados y lidiar con aplicaciones genéricas que no reflejan la realidad del consumo local o que simplemente son complicados de comprender. Además, los altos costos de energía eléctrica son una preocupación constante para las familias y negocios nuevos.",
        desc_text3: "Hemos desarrollado un ecosistema IoT (Internet de las Cosas) plug-and-play que se instala en minutos sobre los interruptores y enchufes existentes, sin necesidad de romper paredes, quebrar techos, ni alterar la red eléctrica. A través de nuestra plataforma web y móvil, los usuarios pueden controlar sus electrodomésticos de forma remota, podrán programar horarios de encendido y monitorear el consumo de energía de su hogar en tiempo real.",
        goals_title: "Nuestros Objetivos",
        goals_text: "Desarrollar un ecosistema de Internet de las Cosas (IoT) de arquitectura plug-and-play de fácil entendimiento que permita a las familias y nuevos negocios en el Perú gestionar su consumo eléctrico de manera eficiente, optimizando su gasto económico y fomentando la sostenibilidad a través de una plataforma de software: una app y/o sitio web.",
        plans_title: "Nuestros Planes",
        plans_subtitle: "Elige el plan que mejor se adapte a tu consumo y tamaño de infraestructura.",
        plan_free_price: "S/ 0 <span>/mes</span>",
        plan_free_desc: "Ideal para departamentos y casas tradicionales.",
        plan_free_li1: "Hasta 3 enchufes inteligentes",
        plan_free_li2: "Monitoreo de watts en tiempo real",
        plan_free_li3: "App ElectroCorp Básica",
        btn_start: "Empezar Gratis",
        plan_ent_price: "A Medida",
        plan_ent_desc: "Ideal para empresas, oficinas y casas grandes.",
        plan_ent_li1: "Dispositivos Ilimitados",
        plan_ent_li2: "Dashboard Administrativo Web",
        plan_ent_li3: "Soporte técnico 24/7",
        btn_contact: "Contactar Ventas",
        device_title: "Sistemas I.O.T. de ElectroCorp",
        device_subtitle: "Enchufes Inteligentes a tu alcance",
        contact_title: "Únete a la Revolución Eléctrica",
        contact_subtitle: "El futuro es eficiente. Suscríbete para recibir consejos de ahorro, actualizaciones de la app y ofertas exclusivas en nuestro próximo pack de enchufes inteligentes.",
        btn_send: "Enviar",
        footer_rights: "Todos los derechos reservados."
    },
    en: {
        nav_home: "Home",
        nav_desc: "Description",
        nav_goals: "Goals",
        nav_plans: "Pricing",
        nav_reviews: "Reviews",
        nav_about: "About us",
        nav_smart: "Smart Plugs",
        nav_support: "Support",
        "meta.testimonialsSlider": "Client reviews slider",
        "meta.sliderPrev": "Previous reviews",
        "meta.sliderNext": "Next reviews",
        testimonials_sectionTitle: "What our clients say",
        testimonials_rolePremium: "Premium customer",
        testimonials_roleFree: "Free user",
        testimonials_q1: '"ElectroCorp.Web shows which appliance is really driving watts in our home. I lowered the bill without rewiring the house or hiring special technicians—it finally feels like smart energy, not a luxury we can\'t afford."',
        testimonials_q2: '"We had the setup running over our existing switches and outlets in an afternoon—no broken walls, no new grid. That plug-and-play piece is what sold us; generic apps never matched how we actually use power in Peru."',
        testimonials_q3: '"I schedule my appliances and watch consumption in real time. When something stayed on all night, the alert saved me an unnecessary cost—our electricity spend was already a pain point, and this gives us real control."',
        testimonials_q4: '"The web platform is easy to read—not another complicated dashboard. I finally see local consumption the way it really happens, and I plan the week with real data instead of guessing on the bill."',
        testimonials_q5: '"We run everything through ElectroCorp.Web: remote on/off, schedules, and monitoring from the app. For our household, democratizing home automation and cutting energy costs is the point—and this is the first stack that made it feel realistic."',
        about_title: "About us",
        about_lead: "UPC Software Engineering students building ElectroCorp.Web",
        about_role_diego: "Logic & backend-oriented",
        about_bio_diego: "Software Engineering student at UPC. C++, HTML, CSS, JavaScript, C#, Python, and Java. Backend structure and APIs for ElectroCorp.Web.",
        about_role_seb: "Data & monitoring-oriented",
        about_bio_seb: "Software Engineering student at UPC. C++, HTML, CSS, JavaScript. Data flow, metrics, and power-usage views for the platform.",
        about_role_gho: "Logic & integration-oriented",
        about_bio_gho: "Software Engineering student at UPC. C++, HTML, CSS, and JavaScript. End-to-end integration across services and features.",
        about_role_alex: "UI / UX & frontend-oriented",
        about_bio_alex: "Software Engineering student at UPC. C++, HTML, CSS, JavaScript, C#, Python, Java, and Flutter. Design and interface for the ElectroCorp.Web platform and the app.",
        about_role_ronal: "Logic & quality-oriented",
        about_bio_ronal: "Software Engineering student at UPC. C++, HTML, CSS, and JavaScript. Code quality, testing, and reliable handoffs between features.",
        nav_login: "Log in",
        nav_register: "Sign up",
        hero_title: "Take control of your home's electricity consumption",
        hero_dashboard: "Go to dashboard",
        hero_subtitle: "The ultimate fusion between IoT Sensors and Consumer Intelligence",
        desc_title: "Start-Up Description",
        desc_text1: "We are a tech startup focused on democratizing home automation and energy efficiency for Peruvian households.",
        desc_text2: "Currently, converting a traditional house into a 'smart home' is perceived as a costly luxury, requiring electrical wiring modifications, hiring specialized technicians, and dealing with generic applications that do not reflect local consumption realities or are simply complicated to understand. Furthermore, high electricity costs are a constant concern for families and new businesses.",
        desc_text3: "We have developed a plug-and-play IoT (Internet of Things) ecosystem that installs in minutes over existing switches and outlets, without the need to break walls, smash ceilings, or alter the electrical grid. Through our web and mobile platform, users can control their appliances remotely, schedule turn-on times, and monitor their home's energy consumption in real-time.",
        goals_title: "Our Goals",
        goals_text: "To develop an easy-to-understand plug-and-play Internet of Things (IoT) ecosystem that allows families and new businesses in Peru to efficiently manage their electrical consumption, optimizing their economic expenses and promoting sustainability through a software platform: an app and/or website.",
        plans_title: "Our Plans",
        plans_subtitle: "Choose the plan that best fits your consumption and infrastructure size.",
        plan_free_price: "S/ 0 <span>/mo</span>",
        plan_free_desc: "Ideal for apartments and traditional homes.",
        plan_free_li1: "Up to 3 smart plugs",
        plan_free_li2: "Real-time watt monitoring",
        plan_free_li3: "Basic ElectroCorp App",
        btn_start: "Start for Free",
        plan_ent_price: "Custom",
        plan_ent_desc: "Ideal for businesses, offices, and large homes.",
        plan_ent_li1: "Unlimited Devices",
        plan_ent_li2: "Web Administrative Dashboard",
        plan_ent_li3: "24/7 Technical Support",
        btn_contact: "Contact Sales",
        device_title: "ElectroCorp I.O.T. Systems",
        device_subtitle: "Smart Plugs at your fingertips",
        contact_title: "Join the Electrical Revolution",
        contact_subtitle: "The future is efficient. Subscribe to receive saving tips, app updates, and exclusive offers on our upcoming smart plug pack.",
        btn_send: "Submit",
        footer_rights: "All rights reserved."
    }
};

let currentLanguage = "en";

function applyTranslations(lang) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            if (element.innerHTML.includes('<i class="fa')) {
                const icon = element.querySelector("i").outerHTML;
                element.innerHTML = `${icon} ${translations[lang][key]}`;
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
        const key = element.getAttribute("data-i18n-aria");
        if (key && translations[lang] && translations[lang][key]) {
            element.setAttribute("aria-label", translations[lang][key]);
        }
    });

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.placeholder = lang === "en" ? "Search keyword or question" : "Buscar palabra clave o pregunta";
    }

    const langText = document.getElementById("lang-text");
    if (langText) {
        langText.innerText = lang === "en" ? "ES" : "EN";
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "es" : "en";
    applyTranslations(currentLanguage);
}

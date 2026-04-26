document.addEventListener('DOMContentLoaded', () => {

  // --- 1. LOGIC OF BACKGROUND MUSIC ---
  const musicBtn = document.getElementById('music-btn');
  const bgMusic = document.getElementById('bg-music');
  let isPlaying = false;
  bgMusic.volume = 0.3; 

  musicBtn.addEventListener('click', () => {
    if (isPlaying) {
      bgMusic.pause();
      musicBtn.textContent = '🔇'; // Silence icon
      musicBtn.style.backgroundColor = 'var(--text-main)';
    } else {
      bgMusic.play().catch(error => {
        console.log("The browser blocked playback: ", error);
      });
      musicBtn.textContent = '🔊'; // Sound icon
      musicBtn.style.backgroundColor = 'var(--primary-color)';
    }
    isPlaying = !isPlaying;
  });

  // --- 2. LANGUAGE SWITCH LOGIC (Visual) ---
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      langButtons.forEach(b => b.classList.remove('lang-btn--active'));
      e.target.classList.add('lang-btn--active');
    });
  });

});
document.addEventListener('DOMContentLoaded', () => {

  // --- 1. LOGIC OF THE BACKGROUND MUSIC (It remains) ---
  const musicBtn = document.getElementById('music-btn');
  const bgMusic = document.getElementById('bg-music');
  let isPlaying = false;

  if (bgMusic) bgMusic.volume = 0.3; 

  if (musicBtn && bgMusic) {
    musicBtn.addEventListener('click', () => {
      if (isPlaying) {
        bgMusic.pause();
        musicBtn.textContent = '🔇';
        musicBtn.style.backgroundColor = 'var(--surface)';
        musicBtn.style.color = 'var(--text-main)';
      } else {
        bgMusic.play().catch(error => {
          console.log("The browser blocked autoplay: ", error);
        });
        musicBtn.textContent = '🔊';
        musicBtn.style.backgroundColor = 'var(--primary)';
        musicBtn.style.color = '#fff';
      }
      isPlaying = !isPlaying;
    });
  }

  // --- 2. TRANSLATION DICTIONARY ---
  const translations = {
    en: {
      nav_hero: "Hero",
      nav_features: "Features",
      nav_about: "About us",
      nav_platform: "Our platform",
      nav_pricing: "Pricing",
      nav_contact: "Contact",
      btn_login: "Login",
      btn_register: "Register",
      hero_title: "Smart insights for your home",
      hero_subtitle: "Track energy, devices and activity with a simple and powerful dashboard",
      hero_btn: "Try it right now!"
    },
    es: {
      nav_hero: "Inicio",
      nav_features: "Características",
      nav_about: "Nosotros",
      nav_platform: "Plataforma",
      nav_pricing: "Precios",
      nav_contact: "Contacto",
      btn_login: "Iniciar Sesión",
      btn_register: "Registrarse",
      hero_title: "Información inteligente para tu hogar",
      hero_subtitle: "Rastrea energía, dispositivos y actividad con un panel simple y poderoso",
      hero_btn: "¡Pruébalo ahora mismo!"
    }
  };

  // --- 3. LANGUAGE SWITCH LOGIC ---
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // 3.1 Remove active class from everyone and assign it to the clicked character.
      langButtons.forEach(b => b.classList.remove('lang-btn--active'));
      const clickedBtn = e.target;
      clickedBtn.classList.add('lang-btn--active');
      
      // 3.2 Obtain the selected language ('EN' or 'ES')
      const lang = clickedBtn.textContent.toLowerCase();

      // 3.3 Search for all elements that have the attribute 'data-i18n'
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n'); // Ejemplo: 'hero_title'
        
        // If the key exists in our dictionary, we change the text.
        if (translations[lang] && translations[lang][key]) {
          element.textContent = translations[lang][key];
        }
      });
    });
  });

  // --- 4. LOGIN BUTTON LOGIC ---

// We select the button using its class
  const loginBtn = document.querySelector('.btn-nav--ghost');
  
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      // Here you can redirect to another page using: window.location.href = "login.html";
      // Or display an alert for the prototype
      alert('🚀 Redirect to the Nex login panel...');
    });
  }

});
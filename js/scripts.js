  /* ---------- EFECTO DE ESCRITURA MODALIDADES ---------- */
  (function(){
    const texto1 = "Facilitamos tu manera de aprender";
    const texto2 = "con diferentes modalidades";

    const typed1 = document.getElementById("typed");
    const typed2 = document.getElementById("typed2");

    let i1 = 0, j1 = 0;
    const velocidad1 = 70;
    let animacionIniciada1 = false;

    function escribir1() {
      if (i1 < texto1.length) {
        typed1.innerHTML += texto1.charAt(i1);
        i1++;
        setTimeout(escribir1, velocidad1);
      } else {
        setTimeout(escribir2, 600);
      }
    }

    function escribir2() {
      if (j1 < texto2.length) {
        typed2.innerHTML += texto2.charAt(j1);
        j1++;
        setTimeout(escribir2, velocidad1);
      }
    }

    window.addEventListener("scroll", function () {
      const element = document.querySelector(".modalidades_cuadro_general_titulo");
      const position = element.getBoundingClientRect();

      if (position.top < window.innerHeight && !animacionIniciada1) {
        animacionIniciada1 = true;
        escribir1();
      }
    });
  })();

  /* ---------- EFECTO DE ESCRITURA QUIENES SOMOS ---------- */
  (function(){
    const textoStrong = "¿Quiénes somos?";
    const strongElement = document.getElementById("typed-strong");
    let i2 = 0;
    const velocidad2 = 80;

    function escribirStrong() {
      if (i2 < textoStrong.length) {
        strongElement.innerHTML += textoStrong.charAt(i2);
        i2++;
        setTimeout(escribirStrong, velocidad2);
      }
    }

    window.addEventListener("DOMContentLoaded", escribirStrong);
  })();


/* ---------- EFECTO DE ESCRITURA Sedes de CEBA ---------- */
(function(){
  const textoH3 = "Sedes de CEBA";
  const textoH5 = "Porque tu aprendizaje importa, en CEBA-UCV abrimos espacios en distintas sedes para acompañarte!";
  
  const h3Element = document.getElementById("typed-h3");
  const h5Element = document.getElementById("typed-h5");

  let i = 0;
  let j = 0;
  const velocidad = 80; // velocidad escritura en ms

  function escribirH3() {
    if (i < textoH3.length) {
      h3Element.innerHTML += textoH3.charAt(i);
      i++;
      setTimeout(escribirH3, velocidad);
    } else {
      // cuando termine el h3, empieza el h5
      setTimeout(escribirH5, 500);
    }
  }

  function escribirH5() {
    if (j < textoH5.length) {
      h5Element.innerHTML += textoH5.charAt(j);
      j++;
      setTimeout(escribirH5, velocidad);
    }
  }

  window.addEventListener("DOMContentLoaded", escribirH3);
})();

/* ---------- EFECTO DE ESCRITURA PARA APRENDIZAJE ---------- */
(function(){
  const texto = "Hacemos tu aprendizaje posible!";
  const element = document.getElementById("typed-aprendizaje");

  let i = 0;
  const velocidad = 80; // velocidad en ms

  function escribir() {
    if (i < texto.length) {
      element.innerHTML += texto.charAt(i);
      i++;
      setTimeout(escribir, velocidad);
    }
  }

  window.addEventListener("DOMContentLoaded", escribir);
})();


  /* ---------- EFECTO COLOR DEL NAV CUANDO SE HACE SCROLL ---------- */

    const distanciaScroll = 400;
  
    window.addEventListener('scroll', function () {
      const nav = document.querySelector('.nav_ceba');
      const scrollActual = window.scrollY;
  
      if (scrollActual >= distanciaScroll) {
        nav.style.backgroundColor = 'rgb(32 49 112 / 95%)';
        nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.10)';
      } else {
        nav.style.backgroundColor = 'rgb(32 49 112 / 95%)';
        nav.style.boxShadow = 'none';
      }
    });

  
  /* ---------- EFECTO BOTON VOLVER AL INICIO ---------- */

    // Obtener el botón
    const btn = document.getElementById("btnArriba");

    // Mostrar el botón cuando se hace scroll hacia abajo
    window.onscroll = function() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };

    // Acción al hacer clic
    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // scroll suave
      });
    });




// Seleccionamos todos los elementos de misión y visión
const elementos = document.querySelectorAll('.mision_img, .mision_1, .vision_img, .vision_1');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('activa'); // activa la animación
      obs.unobserve(entry.target); // opcional
    }
  });
}, { threshold: 0.2 });

elementos.forEach(el => observer.observe(el));





// Galeria

const cuadro_general_graduados_cuadros_linea_cuadro_1 = document.querySelectorAll('.cuadro_general_graduados_cuadros_linea_cuadro_1');
const lightbox = document.getElementById('lightbox');
const lightboxImagen = document.querySelector('.lightbox-imagen');
const cerrar = document.querySelector('.cerrar');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let indexActual = 0;
const urls = Array.from(cuadro_general_graduados_cuadros_linea_cuadro_1).map(c => c.style.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/, '$1'));

// Abrir lightbox
cuadro_general_graduados_cuadros_linea_cuadro_1.forEach((c, i) => {
  c.addEventListener('click', () => {
    indexActual = i;
    lightbox.style.display = 'flex';
    lightboxImagen.src = urls[i];
  });
});

// Cerrar lightbox
cerrar.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Navegar
prev.addEventListener('click', () => {
  indexActual = (indexActual - 1 + urls.length) % urls.length;
  lightboxImagen.src = urls[indexActual];
});
next.addEventListener('click', () => {
  indexActual = (indexActual + 1) % urls.length;
  lightboxImagen.src = urls[indexActual];
});

// Cerrar al hacer click fuera de la imagen
lightbox.addEventListener('click', e => {
  if(e.target === lightbox) lightbox.style.display = 'none';
});
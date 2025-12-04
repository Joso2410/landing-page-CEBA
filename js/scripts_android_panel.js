    function abrirPanel() {
      document.getElementById("panelMenu").style.width = "260px";
    }

    function cerrarPanel() {
      document.getElementById("panelMenu").style.width = "0";
    }

    function mostrarSublista(id) {
      const elemento = document.getElementById(id);
      elemento.classList.toggle("sublista-activa");
    }
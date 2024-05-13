function toggleNavbar(open) {
    const navbar = document.getElementById('navbar');
    const openIcon = document.getElementById('openIcon');
    const closeIcon = document.getElementById('closeIcon');

    if (open) {
        navbar.style.width = '250px'; // Asume que quieres una barra de navegación de 250px de ancho
        openIcon.style.display = 'none';
        closeIcon.style.display = 'flex'; // Asegúrate de que el display flex se aplica para mantener la alineación
    } else {
        navbar.style.width = '0';
        openIcon.style.display = 'flex'; // Igualmente, usa flex para mantener la consistencia
        closeIcon.style.display = 'none';
    }
    
}

function setSelectedFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const selected = params.get('selected');
    if (selected) {
      const radio = document.getElementById('radio' + selected);
      if (radio) {
        radio.checked = true;
      }
    }
    removeSelectedParam();
  }

  function removeSelectedParam() {
    const url = new URL(window.location);
    url.searchParams.delete('selected'); // Elimina el parámetro 'selected' de la URL
    history.pushState({}, '', url); // Actualiza la URL en la barra de direcciones sin recargar la página
}

  window.onload = setSelectedFromUrl;

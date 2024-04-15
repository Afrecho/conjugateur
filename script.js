const verboSelect = document.getElementById('verboSelect');
const verboSpan = document.getElementById('verbe');
const verbPresent = document.getElementById('verbPresent');
const verbPasseCompose = document.getElementById('verbPasseCompose');
const verbFutur = document.getElementById('verbFutur');
const verbImparfaite = document.getElementById('verbImparfaite');

verboSelect.addEventListener('change', () => {
  const verbo = verboSelect.value;

  // Enviar solicitud AJAX al archivo PHP
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'leertabla.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(`verbo=${verbo}`);

  xhr.onload = () => {
    const response = JSON.parse(xhr.responseText);

    // Actualizar el contenido de las etiquetas
    verboSpan.textContent = verbo;
    verbPresent.textContent = response.present;
    verbPasseCompose.textContent = response.passeCompose;
    verbFutur.textContent = response.futur;
    verbImparfaite.textContent = response.imparfaite;
  };
});

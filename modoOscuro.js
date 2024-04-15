 /*modo oscuro*/
 const miColorGris = getComputedStyle(document.documentElement).getPropertyValue('--colorGris');
 const miColorAzul = getComputedStyle(document.documentElement).getPropertyValue('--colorAzul');
 const miColorPlomo = getComputedStyle(document.documentElement).getPropertyValue('--colorPlomo');

 document.addEventListener('DOMContentLoaded', function() {
   const darkModeSwitch = document.getElementById('darkModeSwitch');
   const contentVerbElements = document.querySelectorAll('.contentVerb');
   const desTempsElement = document.getElementById('desTemps');
   const tempVerbeElements = document.querySelectorAll('.tempVerbe');
   const textVerbeElement = document.querySelector('#textVerbe');
   const selectElement = document.getElementById('verboSelect');
   const body = document.body;
   const h1Element = document.querySelector('h1');
   const h2Elements = document.querySelectorAll('.titreVerbe'); // Changed variable name
 



   darkModeSwitch.addEventListener('change', function() {
     if (darkModeSwitch.checked) {
       // Cambiar a modo oscuro
       body.style.backgroundColor = '#333333';
       contentVerbElements.forEach(element => {
         element.style.backgroundColor = '#333333';
         element.style.color = miColorGris; 
         element.style.backgroundColor = "#4d4a4a98";
       });
       desTempsElement.style.backgroundColor = '#333333';
       tempVerbeElements.forEach(element => {
         element.style.backgroundColor = '#333333'; 
       });
       textVerbeElement.style.color = miColorPlomo; 
       textVerbeElement.style.backgroundColor = miColorGris;
       selectElement.style.backgroundColor = '#333333'; // Cambiar el color de fondo del select a oscuro
       selectElement.style.color = miColorGris; // Cambiar el color del texto del select a amarillo
       h1Element.style.color = miColorGris; // Cambiar el color del texto de h1 a amarillo
       h2Elements.forEach(element => { // Loop through each h2 element
         element.style.color = miColorGris;
         element.style.backgroundColor = miColorAzul ;
       });
     } else {
       // Regresar al modo claro

       body.style.backgroundColor = 'white';
       contentVerbElements.forEach(element => {
         element.style.backgroundColor = 'rgba(212, 217, 226, 0.63)';
         element.style.color = '#313c5f'; // Volver al color original del texto
       });
       desTempsElement.style.backgroundColor = '#CED6ED';
       tempVerbeElements.forEach(element => {
         element.style.backgroundColor = 'white'; // Volver al color original
       });
       textVerbeElement.style.color = miColorPlomo; 
       textVerbeElement.style.backgroundColor = '#60a02142';
       selectElement.style.backgroundColor = '#60a02142'; 
       selectElement.style.color = miColorPlomo; // Volver al color original del texto del select
       h1Element.style.color = '#ff7f50'; // Volver al color original del texto de h1
       h2Elements.forEach(element => { // Loop through each h2 element
         element.style.color = '#313c5f'; 
         element.style.backgroundColor = '#e2cfcfd7';
       });
     }
   });
 });
 

     
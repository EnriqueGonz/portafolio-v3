
function copiarAlPortapapeles() {
  var contenido = 'enriquegonz1323@gmail.com';

  navigator.clipboard.writeText(contenido)
    .then(function() {
      alert("¡Texto copiado al portapapeles!");
    })
    .catch(function(error) {
      console.error("Error al copiar texto: ", error);
    });
}

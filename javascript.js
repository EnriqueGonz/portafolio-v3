

document.addEventListener("DOMContentLoaded", function() {
    // Este código se ejecutará una vez que el DOM esté completamente cargado y listo
    //console.log("El DOM está listo!");
    // Puedes poner aquí el código que quieras ejecutar al iniciar el DOM
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    document.getElementById('myButtonemail').addEventListener('click', function() {
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
      var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
      
      tooltipList.forEach(function(tooltip) {
        tooltip.show(); // Mostrar el tooltip
        var contenido = 'enriquegonz1323@gmail.com';
  
        navigator.clipboard.writeText(contenido)
          .then(function() {
            console.log("¡Email copiado al portapapeles!");
          })
          .catch(function(error) {
            console.error("Error al copiar texto: ", error);
          });
      
        setTimeout(function() {
          tooltip.hide(); // Ocultar el tooltip después de 5 segundos
        }, 5000);
      });
    });
});



function copiarAlPortapapeles() {
    var contenido = 'enriquegonz1323@gmail.com';
  
    navigator.clipboard.writeText(contenido)
      .then(function() {
        alert("¡Email copiado al portapapeles!");
      })
      .catch(function(error) {
        console.error("Error al copiar texto: ", error);
      });
  }
  
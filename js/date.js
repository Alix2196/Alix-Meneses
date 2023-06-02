console.log("hola");

function calcularEdad() {
    var fechaNacimiento = new Date('1996-09-21'); // Fecha de nacimiento en formato AAAA-MM-DD
    var fechaActual = new Date();
    var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    
    // Verificar si el cumpleaños ya ha pasado en el año actual
    if (fechaNacimiento.getMonth() > fechaActual.getMonth() ||
        (fechaNacimiento.getMonth() === fechaActual.getMonth() && fechaNacimiento.getDate() > fechaActual.getDate())) {
      edad--;
    }
    
    document.getElementById('edad').textContent = edad;
  }
  
  calcularEdad();
  
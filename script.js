var opciones = ["piedra", "papel", "tijera"];
var volverAJugar;

do {
  var eleccionUsuario = prompt("Ingresá Piedra, Papel o Tijera:");
  eleccionUsuario = eleccionUsuario === null ? "" : eleccionUsuario.trim().toLowerCase();

  if (opciones.indexOf(eleccionUsuario) === -1) {
    alert("Valor inválido. Tenés que ingresar Piedra, Papel o Tijera.");
  } else {
    var eleccionCompu = opciones[Math.floor(Math.random() * 3)];
    var resultado;

    if (eleccionUsuario === eleccionCompu) {
      resultado = "Empate.";
    } else if (
      (eleccionUsuario === "tijera" && eleccionCompu === "papel") ||
      (eleccionUsuario === "papel" && eleccionCompu === "piedra") ||
      (eleccionUsuario === "piedra" && eleccionCompu === "tijera")
    ) {
      resultado = "¡Ganaste!";
    } else {
      resultado = "Perdiste.";
    }

    alert("Elegiste " + eleccionUsuario + " y la computadora eligió " + eleccionCompu + ". " + resultado);
  }

  volverAJugar = confirm("¿Querés volver a jugar?");
} while (volverAJugar);
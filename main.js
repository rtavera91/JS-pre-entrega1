// Pedimos al usuario su edad, edad de retiro y monto de ahorro mensual
let nombreUsuario = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuál es tu edad?");
let edadRetiro = prompt("¿A qué edad te gustaría retirarte?");
let ahorroMensual = prompt("¿Cuánto dinero te gustaría ahorrar mensualmente?");

// Verificamos si los valores ingresados son números
if (isNaN(edad) || isNaN(edadRetiro) || isNaN(ahorroMensual)) {
  console.log(
    "Error: Debes ingresar solo números. Por favor, intenta de nuevo."
  );
} else {
  // Convertimos las edades y el ahorro mensual a números enteros
  edad = parseInt(edad);
  edadRetiro = parseInt(edadRetiro);
  ahorroMensual = parseInt(ahorroMensual);
  let ahorroAnual = ahorroMensual * 12;

    // Preguntamos al usuario si desea utilizar el interés promedio del 10%
    const usarInteresPromedio = confirm("¿Deseas utilizar el interés promedio anual del 10%?");
    let interesPorcentaje;
  
    // Si el usuario rechaza el interés promedio, le pedimos que ingrese su propio porcentaje
    if (!usarInteresPromedio) {
      do {
        const porcentaje = prompt("Ingresa tu propio porcentaje de interés (sin el signo de porcentaje)");
        interesPorcentaje = parseFloat(porcentaje);
      } while (isNaN(interesPorcentaje) || interesPorcentaje <= 0);
    } else {
      interesPorcentaje = 10;
    }
    // Convertimos el porcentaje de interés a una tasa decimal
    const interesDecimal = interesPorcentaje / 100;

  // Calculamos el número de años que el usuario deberá ahorrar
  const numAnios = edadRetiro - edad;

  // Imprimimos un mensaje con el número de años que el usuario deberá ahorrar
  console.log(`Necesitas ahorrar por ${numAnios} años hasta tu retiro`);
  console.log(
    `${nombreUsuario}, tu ahorro mensual es de $${ahorroMensual} pesos, por lo que tu ahorro anual sería de $${ahorroAnual} pesos`
  );

  // Creamos una variable para almacenar el total de ahorro
  let totalAhorro = 0;

  // Creamos un bucle que sume el ahorro anual al total de ahorro por el número de años que se debe ahorrar
  for (let i = 0; i < numAnios; i++) {
    totalAhorro += ahorroAnual;

    // Calculamos el interés compuesto del año actual
    const interesCompuesto = totalAhorro * interesDecimal;
    totalAhorro += interesCompuesto;

    console.log(`Ahorro del año ${i+1}: $${totalAhorro.toFixed(2)}`);
  }
}

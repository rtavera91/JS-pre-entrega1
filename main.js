let ahorros = [];

function AhorroAnual(anio, cantidad) {
  this.anio = anio;
  this.cantidad = cantidad;
}

let edad = prompt("¿Cuál es tu edad actual?");
let edadRetiro = prompt("¿A qué edad te gustaría retirarte?");
let ahorroMensual = prompt("¿Cuánto dinero te gustaría ahorrar al mes?");
let ahorroAnual = ahorroMensual * 12;

let tasaInteres = confirm("¿Quieres usar una tasa de interés promedio del 10%? Presiona 'Aceptar' para sí, y 'Cancelar' para no.");
if (!tasaInteres) {
  let porcentaje = prompt("Ingresa la tasa de interés que te gustaría usar en porcentaje (sin el signo %).");
  while (isNaN(parseFloat(porcentaje))) {
    alert("Debes ingresar un número válido.");
    porcentaje = prompt("Ingresa la tasa de interés que te gustaría usar en porcentaje (sin el signo %).");
  }
  tasaInteres = parseFloat(porcentaje) / 100;
} else {
  tasaInteres = 0.1; // 10%
}

let anios = edadRetiro - edad;
let totalAhorro = 0;
for (let i = 0; i < anios; i++) {
  let cantidad = totalAhorro + ahorroAnual;
  let interes = cantidad * tasaInteres;
  totalAhorro = cantidad + interes;
  let anio = new Date().getFullYear() + i;
  let ahorroActual = new AhorroAnual(anio, totalAhorro);
  ahorros.push(ahorroActual);
}

let opcion = prompt("¿Quieres ver el desgloce total o un año en particular? Ingresa 'total' o el año que te gustaría ver (por ejemplo: '2025').");

if (opcion.toLowerCase() === "total") {
  console.log("Desgloce total de ahorro:");
  console.log(ahorros);
} else {
  let anioElegido = parseInt(opcion);
  let ahorrosFiltrados = ahorros.filter(ahorro => ahorro.anio === anioElegido);
  if (ahorrosFiltrados.length > 0) {
    console.log(`Ahorro acumulado en el año ${anioElegido}: ${ahorrosFiltrados[0].cantidad}`);
  } else {
    console.log(`No se encontró información del año ${anioElegido} en el desgloce.`);
  }
}


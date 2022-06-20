// aplicar los operadores lógicos vistos en clase//

let valor1: number = Number(prompt("INGRESE UN VALOR"));
let valor2: number = 12;
if (!(valor1 === 12) && valor2 === 4) {
  console.log("Su valor es igual a los meses del año");
} else {
  if (valor1 < 5 || valor2 >= 4) {
    console.log("disyuncion y negativo");
  }
}

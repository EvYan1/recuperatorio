// la funcion lineas separa la información de cada alumno en la consola.
function lineas(): string {
  let linea: string = "-";
  for (let i = 0; i < 40; i++) {
    linea = linea + "-";
  }
  return linea;
}
// se ingresa la cantidad de alumnos
let cantidad_de_alumnos: number = Number(
  prompt("ingrese la cantidad de alumnos")
);
let alumnos: any[] = new Array(cantidad_de_alumnos);
let notas: number[] = new Array(3 * cantidad_de_alumnos);
let indice: number;
// inicia el bucle for, que itera según el número de alumnos
// el bucle pide nombre y 3 notas de cada alumno mostrando el promedio
for (indice = 0; indice < cantidad_de_alumnos; indice++) {
  let nombre = prompt("Ingrese el nombre del alumno");
  alumnos[indice] = nombre;
  let nota1: number = Number(prompt("ingrese la primer nota"));
  notas[indice] = nota1;
  let nota2: number = Number(prompt("ingrese la segunda nota"));
  notas[indice + 1] = nota2;
  let nota3: number = Number(prompt("ingrese la tercer nota"));
  notas[indice + 2] = nota3;
  console.log("Alumno/a:", nombre);
  console.log("Nota del 1er trimestre:", nota1);
  console.log("Nota del 2do trimestre:", nota2);
  console.log("Nota del 3er trimestre:", nota3);
  console.log("Nota promedio:", (nota1 + nota2 + nota3) / 3);
  console.log(lineas());
}

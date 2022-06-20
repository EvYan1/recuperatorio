let numero1: number = Number(prompt("ingrese número:"));
let numero2: number = Number(prompt("ingrese otro número"));

let suma1: number = 0;

if (numero2 > numero1) {
  for (let contador: number = numero1; contador <= numero2; contador++) {
    suma1 = suma1 + contador;
  }
  console.log("el resultado es de: ", suma1);
} else {
  for (let contador: number = numero1; contador >= numero2; contador--) {
    suma1 = suma1 + contador;
  }
}
console.log("el resultado es de: ", suma1);

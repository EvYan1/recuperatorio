function Divisores(numero1: number) {
  let cantidad: number = 0;

  for (let indice = 0; indice < numero1; indice++) {
    cantidad = indice;
    if (numero1 % indice === 0) {
      console.log(cantidad);
    }
  }
  console.log(numero1);
}
let numero1: number = Number(prompt("ingrese numero"));
console.log(
  "los divisores del número " + numero1 + "es de ",
  Divisores(numero1)
);

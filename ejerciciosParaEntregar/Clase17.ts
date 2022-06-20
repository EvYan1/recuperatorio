let lista1: number[] = new Array(6);
let lista2: number[] = new Array(6);
let resultado: number[] = new Array(6);
let indice: number;

for (indice = 0; indice < 6; indice++) {
  lista1[indice] = Number(prompt("Ingrese los 6 primeros números a sumar:"));
}
for (indice = 0; indice < 6; indice++) {
  lista2[indice] = Number(prompt("Ingrese los 6 números restantes"));
}
for (indice = 0; indice < 6; indice++) {
  resultado[indice] = lista1[indice] + lista2[indice];
}
console.log(
  "los numeros ingresados corresponden a los siguientes resultados:",
  resultado
);

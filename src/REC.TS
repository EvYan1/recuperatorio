let cantidad:number=Number(prompt("ingrese cantidad"));
let producto:any;
let precio:number;
let unidades:number;
let total:number=0;

for (let i=0;i<cantidad;i++){
producto=prompt("ingrese producto");
precio=Number(prompt("ingrese precio"));
unidades=Number(prompt("ingrese unidades"))
total=total+precio*cantidad
console.log("Productos: ", producto, "precio ", precio, "unidades", unidades, total)
}

let sueldo: number = Number(prompt("ingrese su sueldo mensual"));
//ingreso por teclado un numero sin puntos
let total: number;
//declaro la variable total para mostrar el resultado
switch (true) {
  case sueldo > 0 && sueldo <= 15000:
    //en caso de que el sueldo sea entre 0 y 15000
    total = sueldo * 1.2;
    // la variable total cambia agregando el 20 porciento al sueldo ingresado
    console.log("su sueldo actualizado es de ", total);
    //  muestra un mensaje al usuario con el sueldo actualizado
    break;
  case sueldo >= 15001 && sueldo <= 20000:
    //en caso de que el sueldo sea entre 15001 y 20000
    total = sueldo * 1.1;
    // la variable total cambia agregando el 10 porciento al sueldo ingresado
    console.log("su sueldo actualizado es de ", total);
    //  muestra un mensaje al usuario con el sueldo actualizado
    break;
  case sueldo >= 20001 && sueldo <= 25000:
    //en caso de que el sueldo menor a 25000
    total = sueldo * 1.05;
    // la variable total cambia agregando el 5 porciento al sueldo ingresado
    console.log("su sueldo actualizado es de ", total);
    // muestra un mensaje al usuario con el sueldo actualizado
    break;
  default:
    // en  su defecto
    console.log("su sueldo sin aumento es de:", sueldo);
    // muestra el mensaje al usuario sin aumento de sueldo
    break;
}

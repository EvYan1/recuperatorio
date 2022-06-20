//Desarrolle un algoritmo que, dada una posición en una carrera se determine el tipo de medalla a entregar//
let posicion: number = Number(prompt("Ingrese su puesto en la carrera"));
if (posicion <1) {
  console.log("La posición ingresada es incorrecta")
}
if (posicion === 1) {
  console.log("medalla de oro");
} else {
  if (posicion === 2) {
    console.log("medalla de plata");
  } else { 
    if (posicion === 3) {
      console.log("medalla de bronce");
    } else if (posicion >3){
      console.log("certificado de participación");
    }
  }  
} 
   
 
// console.log("Hola Dani");
// console.log("Cuidado");
// console.error("Error de conexion");
// console.log(1);
// console.table({nombre:"Julian"});
// console.table([1,3,4,5,6,2,3]);
// console.log('Soy un nuevo log');
// console.log("Hola");
// alert("Hola")
// es5
var nombre = "Pedro";
// console.log(nombre);
var nombre = "Maria";
// console.log(nombre);
// ES6
let existe = true;
let existe2 = false;
// console.log(typeof existe);
// console.log(typeof existe2);
const GRAVEDAD = 9.8;

// GRAVEDAD=10 // no puedo reasignar
const personaje = {
  nombre: "Homero",
  apellido: "Simpson",
  edad: 38,
};
// console.log(personaje);
// console.log(personaje.nombre="Marge");
const saludar = function (nombre) {
  console.log(`Hola ${nombre}`);
};
// saludar=0
// saludar("Carlos")
// saludar("Maria")

// function matematica(num1, num2, op){
//     switch (op) {
//         case "+":
//             return num1 + num2
//             break;

//         case "-":
//             return num1 - num2
//             break;

//         default:
//             return 'Op no valida'
//             break;
//     }
// }
const matematica = (num1, num2, op) => {
  switch (op) {
    case "+":
      return num1 + num2;
      break;

    case "-":
      return num1 - num2;
      break;

    default:
      return "Op no valida";
      break;
  }
}; //retun implicito cuando estamos en una sola linea

// let resultadoSuma = matematica(1, 56, "+");
// let resultadoResta = matematica(1, 56, "-");
// console.log(resultadoSuma);
// console.log(resultadoResta);
// console.log(matematica(2, 4, "33"));

const numeros = [1, 4, 3, 2, 78, -9];

// console.log(
//   numeros.filter((el) => {
//     return el >= 3;
//   })
// );

const mostrarLista = (arr) => {
  if (arr.length === 0) return "Lista Vacia";
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  return `La lista contiene ${arr.length} elemento(s)`
};
// console.log(mostrarLista([]));
// console.log(mostrarLista(numeros));
// console.log(mostrarLista("[]"));


window.alert("Hola")
window.prompt("Hola")
// Math.pow() vs **
// let  numero= 2
// console.log(numero**6);
// console.log(Math.pow(2,6));
// // includes
// const numeros =[27,4,1,5,6,5]
// console.log(numeros.includes(5));
// let frase= "A la grande le puse Cuca"
// console.log(frase.includes('z'));
//nullish ??
// truthy y falsy
let nombre = "guido";//truthy
let cantidad = 0;//falsy
let edad = undefined;
let apellido =null;//falsy
let objeto1 = { nombre: "Julian", edad: 40 };//truthy
// and && true && true = true
// or || true || true = true  \ true || false = true  false ||false = false
console.log("CON OP OR");

console.log(nombre || "No existe nombre");
console.log(cantidad || "cantidad es 0");
console.log(apellido || "apellido esta vacio");
console.log(objeto1.nombre || "No hay objeto");
console.log(edad ||"no hay edad");

console.log("CON OP NULLISH");
console.log(nombre ?? "No existe nombre");
console.log(cantidad ?? "cantidad es 0");
console.log(apellido ?? "apellido esta vacio");
console.log(objeto1.nombre ?? "No hay objeto");
console.log(edad ??"no hay edad");



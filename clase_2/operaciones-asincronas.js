// js tiene un solo hilo de ejecucion

// console.log("Inicio del programa");
// setTimeout(() => {
//   for (let i = 0; i < 1000; i++) {
//     console.log(i);
//   }
// }, 2000);
// console.log("siguiente operacion");

// console.log("Fin del programa");

// promesas
// let envio = true;
// const promesa = new Promise((resolve, reject) => {
//   // cuerpo de la promesa
//   setTimeout(() => {
//     if (envio) {
//       resolve("Email enviado correctamente");
//     } else {
//       reject("Error al intentar enviar el Email");
//     }
//   }, 2500);
// });

// // console.log(promesa);
// promesa
// .then((response)=>{
//     console.log(response);

// }).catch((error)=>{
//     console.log(error);

// }).finally(()=>{
//     console.log('Fin de la operacion');//cerrar la conexion a la base de datos

// })
// console.log("Final del programa");

// operaciones
export function suma(a, b) {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      return reject("operacion innecesaria");
    }
    const resultado = a + b;
    resolve(resultado);
  });
}
export function resta(a, b) {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      return reject("operacion innecesaria");
    }
    const resultado = a - b;
    resolve(resultado);
  });
}


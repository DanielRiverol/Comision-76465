function generarNumerosAleatorios() {
  return new Promise((resolve) => {
    const numerosGenerados = [];
    for (let i = 0; i < 10000; i++) {
      numerosGenerados.push(Math.floor(Math.random() * 20) + 1);
    }
    console.log("Numeros generados");
    resolve(numerosGenerados);
  });
}

generarNumerosAleatorios().then((numeros) => {
  console.log("Listado de numeros", numeros);
  const conteo = {};
  for (const numero of numeros) {
    //   console.log(numero);
    if (conteo[numero]) {
      conteo[numero]++;
    } else {
      conteo[numero] = 1;
    }
  }
  console.log(conteo);
});

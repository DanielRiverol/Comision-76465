const productos = [
  {
    manzana: 3,
    peras: 3,
    carnes: 6,
  },
  {
    mandarina: 4,
    jugo: 5,
    harina: 9,
  },
];

for (const producto of productos) {
  const nombresProductos = Object.keys(producto);
  const valoresProductos = Object.values(producto);
  //   console.log(producto);
  //   console.log(nombresProductos);
  //   console.log(valoresProductos);
  for (const elemento in producto) {
    console.log(elemento);
    console.log(producto[elemento]);
  }
}

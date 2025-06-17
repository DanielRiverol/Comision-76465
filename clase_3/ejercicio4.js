const fs = require("fs/promises");

const operacionesAsincronasArchivos = async () => {
  await fs.writeFile(
    "ejemplo2.txt",
    "Soy un mensaje desde una funcion con promesas"
  );
  let result = await fs.readFile("ejemplo2.txt", "utf-8");
  console.log(result);
  await fs.appendFile('ejemplo2.txt', "\nNuevo mensaje")
  result = await fs.readFile("ejemplo2.txt", "utf-8");
  console.log(result);
};


operacionesAsincronasArchivos()
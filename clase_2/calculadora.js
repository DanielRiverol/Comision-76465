import { suma, resta } from "./operaciones-asincronas.js";

const calculos = async () => {
  try {
    const resSuma = await suma(4, 0);
    console.log(`Resultado de la suma = ${resSuma}`);
  } catch (error) {
    console.log("Hubo un error al procesarse la operacion:", error);
  } finally {
    console.log("Operacion terminada");
  }
};
calculos();

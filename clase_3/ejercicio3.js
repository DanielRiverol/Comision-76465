const fs = require("fs");

// crear/ leer/ editar/eliminar archivos
fs.writeFile("ejemplo.txt", "Mensaje de ejemplo", (error) => {
  if (error) return console.log("Error al crear el archivo");
  fs.readFile("ejemplo.txt", "utf-8", (error, result) => {
    if (error) return console.log("Error al leer el archivo");

    console.log(result);
    
    fs.appendFile(
      "ejemplo.txt",
      "Soy contenido nuevo el año es 2025",
      (error) => {
        if (error) return console.log("Error al actualizar el archivo");
        fs.readFile("ejemplo.txt", "utf-8", (error, result) => {
          if (error) return console.log("Error al leer el archivo");
          console.log(result);
        });
      }
    );
  });
});

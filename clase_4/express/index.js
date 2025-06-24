// imports
const express = require("express");
// settings
const app = express();
// const PORT = 4000
app.set("PORT", 5000);
const users = [
  { id: 1, name: "Pedro", edad: 45 },
  { id: 2, name: "Maria", edad: 23 },
  { id: 3, name: "Luana", edad: 18 },
  { id: 4, name: "Guido", edad: 32 },
  { id: 5, name: "Paloma", edad: 20 },
  { id: 6, name: "Manuel", edad: 40 },
  { id: 7, name: "Rocio", edad: 32 },
];
// middlewares
app.use(express.json());
// routes
app.get("/", (req, res) => {
  res.send("HOLA MUNDO DESDE EXPRESS");
});
app.get("/about", (req, res) => {
  res.send("NOSOTROS");
});
app.get("/contact", (req, res) => {
  res.send("CONTACTO");
});
app.get("/users", (req, res) => {
  res.json(users);
});
app.get("/users/:id", (req, res) => {
  //   console.log(req.params);
  try {
    const { id } = req.params;
    console.log(+id);

    const userFound = users.find((user) => user.id === +id);
    console.log(userFound);
    if (!userFound) return res.status(404).send("Usuario no encontrado");
    res.status(200).json(userFound);
  } catch (error) {
    res.status(500).send("Error interno del servidor");
  }
});

app.post("/users", (req, res) => {
  const { name, edad } = req.body;
  try {
    const newUser = {
      id: users.length + 1,
      name: name,
      edad: edad,
    };
    users.push(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send("Error interno del servidor", error);
  }
});
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, edad } = req.body;
  try {
    const userFound = users.find((user) => user.id === +id);
    // console.log(userFound);
    if (!userFound) return res.status(404).send("Usuario no encontrado");
    userFound.name = name;
    userFound.edad = edad;

    res.status(200).json(userFound);
  } catch (error) {
    res.status(500).send("Error interno del servidor", error);
  }
});
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  
  try {
    const userFound = users.find((user) => user.id === +id);
    // console.log(userFound);
    if (!userFound) return res.status(404).send("Usuario no encontrado");
    // como hacemos para eliminar el usuario?

    res.status(200).json("Usuario eliminado con exito");
  } catch (error) {
    res.status(500).send("Error interno del servidor", error);
  }
});

// listener
app.listen(app.get("PORT"), () => {
  console.log(`Servidor de express corriendo en el puerto ${app.get("PORT")}`);
});
// Entrega N° 1
// Descripción General
// Desarrollar un servidor que contenga los endpoints y servicios necesarios para gestionar los productos y carritos de compra para tu API.
// Requisitos de la Primera Entrega
// Desarrollo del Servidor
// El servidor debe estar basado en Node.js y Express, y debe escuchar en el puerto 8080. Se deben disponer dos grupos de rutas: /products y /carts. Estos endpoints estarán implementados con el router de Express, con las siguientes especificaciones:
// Rutas para Manejo de Productos (/api/products/)
// GET /:
// Debe listar todos los productos de la base de datos.
// GET /:pid:
// Debe traer solo el producto con el id proporcionado.
// POST /:
// Debe agregar un nuevo producto con los siguientes campos:
// id: Number/String (No se manda desde el body, se autogenera para asegurar que nunca se repitan los ids).
// title: String
// description: String
// code: String
// price: Number
// status: Boolean
// stock: Number
// category: String
// thumbnails: Array de Strings
// PUT /:pid:
// Debe actualizar un producto por los campos enviados desde el body. No se debe actualizar ni eliminar el idal momento de hacer la actualización.
// DELETE /:pid:
// Debe eliminar el producto con el pid indicado.
// Rutas para Manejo de Carritos (/api/carts/)
// POST /:
// Debe crear un nuevo carrito con la siguiente estructura:
// id: Number/String (Autogenerado para asegurar que nunca se dupliquen los ids).
// products: Array que contendrá objetos que representen cada producto.
// GET /:cid:
// Debe listar los productos que pertenecen al carrito con el cid proporcionado.
// POST /:cid/product/:pid:
// Debe agregar el producto al arreglo products del carrito seleccionado, utilizando el siguiente formato:
// product: Solo debe contener el ID del producto.
// quantity: Debe contener el número de ejemplares de dicho producto (se agregará de uno en uno).
// Si un producto ya existente intenta agregarse, se debe incrementar el campo quantity de dicho producto.
// Persistencia de la Información
// La persistencia se implementará utilizando el sistema de archivos, donde los archivos products.json y carts.json respaldarán la información.
// Se debe utilizar el ProductManager desarrollado en el desafío anterior y crear un CartManager para gestionar el almacenamiento de estos archivos JSON.
// Nota: No es necesario realizar ninguna implementación visual, todo el flujo se puede realizar por Postman o por el cliente de tu preferencia.
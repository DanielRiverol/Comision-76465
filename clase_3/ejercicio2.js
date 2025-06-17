const crypto = require("crypto");
class UsersManager {
  static usuarios = [];
  static passwordUUID = {};

  crearusuario(usuario) {
    const passwordUUIDUser = crypto.randomUUID();
    UsersManager.passwordUUID[usuario.password] = passwordUUIDUser;

    const newUser = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      password: passwordUUIDUser,
    };
    UsersManager.usuarios.push(newUser);
  }

  mostrarUsuarios() {
    // Validar si hay uausrios
    UsersManager.usuarios.forEach((user) => {
      console.log(user);
    });
  }

  validarUsuario(nombre, password) {
    const userFound = UsersManager.usuarios.find(
      (user) => user.nombre === nombre
    );
    console.log(userFound);

    const passwordEsperado = UsersManager.passwordUUID[password];
    console.log(passwordEsperado);

    if (!passwordEsperado) console.log("Error de crendeciales");

    if (passwordEsperado === userFound.password) {
      return "Logueado";
    } else {
      console.log("Error de crendeciales!!!!!!");
    }
  }
}
const manager = new UsersManager();

manager.crearusuario({
  nombre: "Fede",
  apellido: "Lopez",
  password: "password123",
});
manager.crearusuario({
  nombre: "Lucia",
  apellido: "Martinez",
  password: "password123",
});

// manager.mostrarUsuarios()

manager.validarUsuario("Fede", "password123");

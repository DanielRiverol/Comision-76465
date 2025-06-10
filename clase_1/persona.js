// clase Persona
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  static especie = "humano";
  //métodos
  saludar = () => {
    console.log(`Hola, soy ${this.nombre}, com va? `);
  };

  getEspecie = () => {
    console.log(`Aunque no lo creas, soy ${Persona.especie}`);
  };
  
}

// objLiteral= {nombre:nombre}

let persona1= new Persona('Fede')
console.log(persona1.nombre);
console.log(persona1.especie);//undefined
persona1.saludar()
persona1.getEspecie()
console.log(Persona.especie);

// investiguemos POO en JS
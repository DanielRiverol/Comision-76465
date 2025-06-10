class Cuenta {
  // privada no se puede a ella directamente desde fuera de la clase
  #saldo;

  constructor(saldoInicial, nombre = "Juan") {
    this.#saldo = saldoInicial;
    // this._saldo = saldoInicial;
    this.nombre = nombre;
  }

  consultarSaldo() {
    return this.#saldo;
  }
}
const miCuenta = new Cuenta(20000, "Paloma");

console.log(miCuenta.consultarSaldo());
console.log(miCuenta.nombre);

//la lista de clientes.
let arrayCuentas = [
    {
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
    },
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
    },
    {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
    },
    {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
    },
    {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
    },
];
// podes continuar tu codigo a partir de aca!

let banco = {
    clientes: arrayCuentas,

    consultarCliente: function (cliente) {
        let clienteEncontrado = "No Existe";
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titularCuenta === cliente) {
                clienteEncontrado = this.clientes[i]
            }
        }
        return console.log(clienteEncontrado)
    },

    deposito: function (cliente,montoDeposito){
        let sum = 0;
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titularCuenta === cliente) {
               sum = this.clientes[i].saldoEnPesos += montoDeposito;
            
               return console.log("Deposito realizado, su nuevo saldo es: " + sum);
            }
        }  
    },

    extraccion: function(cliente,montoExtraccion){
        let resta = 0;
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titularCuenta === cliente) {
               resta = this.clientes[i].saldoEnPesos -= montoExtraccion;
              
            }
        } 

        if(resta < 0){
           console.log("no tiene saldo suficiente intente con otro monto");
        }else {
            return console.log("extracion exitosa, le queda en la cuenta " + resta);
        }
        
    }
}




banco.consultarCliente("Jacki Shurmer")
banco.deposito("Jacki Shurmer", 8000);
banco.extraccion("Jacki Shurmer", 50000)



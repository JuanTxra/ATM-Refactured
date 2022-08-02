export class Conta {
    constructor(numeroCliente, balcao, saldo, mbway, nib, iban) {
        this.numeroCliente = numeroCliente;
        this.balcao = balcao;
        this.saldo = saldo;
        this.mbway = mbway;
        this.nib = nib;
        this.iban = iban;
    }

    levantarDinheiro(valor) {
        if (this.saldo < valor) {
            return
        } else {
            return this.saldo = this.saldo - valor
        }
    }

    depositarDinheiro(valor) {
        return this.saldo += parseInt(valor)
    }
}
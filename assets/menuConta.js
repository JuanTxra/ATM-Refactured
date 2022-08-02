import {
    Cliente
} from "./Cliente.js";
import {
    Conta
} from "./Conta.js";
import * as funcoesBasicas from "./funcoesBasicas.js"
const criarContaBtn = document.getElementById('criarConta');

let criado = false
export const conta = new Conta();
export const cliente = new Cliente();

criarContaBtn.addEventListener('click', () => {
    criado = true;
    const nomeCliente = document.getElementById('nomeCompleto').value;
    const nifCliente = document.getElementById('nif').value;
    conta.numeroCliente = Math.floor(Math.random() * 100000000);
    conta.balcao = Math.floor(Math.random() * 10000);
    conta.saldo = 0;
    conta.mbway = false;
    conta.nib = Math.floor(Math.random() * 100000000000000000).toString().match(/.{1,4}/g).join(' ');
    conta.iban = `+${conta.balcao} ${conta.nib}`
    cliente.nome = nomeCliente;
    cliente.nif = nifCliente;

    funcoesBasicas.inserirDadosUser(conta.numeroCliente, cliente.nome, cliente.nif, conta.balcao, conta.saldo, conta.mbway, conta.nib, conta.iban)

    document.getElementsByClassName('menuUser')[0].remove();

    funcoesBasicas.reaparecerOpcao(document.getElementById('multibanco'))
    funcoesBasicas.reaparecerOpcao(document.getElementsByClassName('dadosUser')[0]);


});

console.log();
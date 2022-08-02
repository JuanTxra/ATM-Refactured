import {
    Cliente
} from "./Cliente.js";
import {
    Conta
} from "./Conta.js";
import * as funcoesBasicas from "./funcoesBasicas.js";
import {
    conta
} from "./menuConta.js";
import {
    cliente
} from "./menuConta.js";

export function menuConsultas() {
    funcoesBasicas.retirarEventListenerATodos();

    funcoesBasicas.mudarTexto(DescricaoOpcaoUm, 'Consultar Saldos');
    funcoesBasicas.mudarTexto(DescricaoOpcaoTres, 'Consultar Movimentos');
    funcoesBasicas.mudarTexto(DescricaoOpcaoQuatro, 'Consultar NIB');
    funcoesBasicas.mudarTexto(DescricaoOpcaoSeis, 'Consultar IBAN');

    funcoesBasicas.semOpacidade(opcaoSete);
    funcoesBasicas.semOpacidade(opcaoNove);
    funcoesBasicas.semOpacidade(opcaoZeroZero);

    funcoesBasicas.criarOpcao('Menu Inicial');

    opcaoPonto.addEventListener('click', () => {
        funcoesBasicas.voltarOpacidade(opcaoSete);
        funcoesBasicas.voltarOpacidade(opcaoNove);
        funcoesBasicas.voltarOpacidade(opcaoZeroZero);
        funcoesBasicas.menuInicial();
        funcoesBasicas.removerOpcao();
    });

    opcaoUm.addEventListener('click', consultarSaldo);
    opcaoTres.addEventListener('click', consultarMovimentos);
    opcaoQuatro.addEventListener('click', consultarNIB);
    opcaoSeis.addEventListener('click', consultarIBAN);

}

function consultarSaldo() {
    funcoesBasicas.esconderOpcoes();
    let saldo = conta.saldo;
    const texto = document.createElement('p');
    texto.classList.add('textoSaldo');
    texto.innerHTML = `O seu saldo atual é de ${saldo}€`
    document.getElementById('multibanco').appendChild(texto);
    let saldosInterval = setInterval(() => {
        funcoesBasicas.reaparecerOpcoes();
        funcoesBasicas.voltarOpacidade(opcaoSete);
        funcoesBasicas.voltarOpacidade(opcaoNove);
        funcoesBasicas.voltarOpacidade(opcaoZeroZero);
        texto.remove();
        funcoesBasicas.removerOpcao();
        funcoesBasicas.menuInicial();
        clearInterval(saldosInterval);
    }, 2000);
}

function consultarMovimentos() {
    funcoesBasicas.esconderOpcoes()
    const barraBackground = document.createElement('div');
    barraBackground.classList.add('barraBackground');

    const montante = document.createElement('p');
    montante.classList.add('montante');
    montante.innerHTML = 'Sem movimentos para mostrar. <br><br><em> Caso ache que esta mensagem esteja errada, contacte o seu balcão.</em>';
    barraBackground.appendChild(montante);

    document.getElementById('multibanco').insertBefore(barraBackground, document.getElementById('multibanco').firstChild)

    let movimentosInterval = setInterval(() => {
        funcoesBasicas.reaparecerOpcoes();
        funcoesBasicas.voltarOpacidade(opcaoSete);
        funcoesBasicas.voltarOpacidade(opcaoNove);
        funcoesBasicas.voltarOpacidade(opcaoZeroZero);
        barraBackground.remove();
        funcoesBasicas.removerOpcao();
        funcoesBasicas.menuInicial();
        clearInterval(movimentosInterval);
    }, 5000);
}

function consultarNIB() {
    funcoesBasicas.esconderOpcoes();
    let NIB = conta.nib;
    const texto = document.createElement('p');
    texto.classList.add('textoNIB');
    texto.innerHTML = `O seu NIB é o <br><br> ${NIB}`
    document.getElementById('multibanco').appendChild(texto);
    let saldosInterval = setInterval(() => {
        funcoesBasicas.reaparecerOpcoes();
        funcoesBasicas.voltarOpacidade(opcaoSete);
        funcoesBasicas.voltarOpacidade(opcaoNove);
        funcoesBasicas.voltarOpacidade(opcaoZeroZero);
        texto.remove();
        funcoesBasicas.removerOpcao();
        funcoesBasicas.menuInicial();
        clearInterval(saldosInterval);
    }, 5000);
}

function consultarIBAN() {
    funcoesBasicas.esconderOpcoes();
    let IBAN = conta.iban;
    const texto = document.createElement('p');
    texto.classList.add('textoIBAN');
    texto.innerHTML = `O seu IBAN é o <br><br> ${IBAN}`
    document.getElementById('multibanco').appendChild(texto);
    let saldosInterval = setInterval(() => {
        funcoesBasicas.reaparecerOpcoes();
        funcoesBasicas.voltarOpacidade(opcaoSete);
        funcoesBasicas.voltarOpacidade(opcaoNove);
        funcoesBasicas.voltarOpacidade(opcaoZeroZero);
        texto.remove();
        funcoesBasicas.removerOpcao();
        funcoesBasicas.menuInicial();
        clearInterval(saldosInterval);
    }, 5000);
}
opcaoQuatro.addEventListener('click', menuConsultas);
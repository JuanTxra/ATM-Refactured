import {
    Cliente
} from "./Cliente.js";
import {
    Conta
} from "./Conta.js";

import * as menuLevantamentos from "./menuLevantamentos.js";
import * as menuConsultas from "./menuConsultas.js";
import * as menuDepositos from "./menuDepositos.js";
import * as menuMbWay from "./menuMbWay.js";
import * as menuVouchers from "./menuVouchers.js";

export function buscarOpcoes() {
    const opcaoUm = document.getElementById('opcaoUm');
    const DescricaoOpcaoUm = document.getElementById('DescricaoOpcaoUm');

    const opcaoTres = document.getElementById('opcaoTres');
    const DescricaoOpcaoTres = document.getElementById('DescricaoOpcaoTres');

    const opcaoQuatro = document.getElementById('opcaoQuatro');
    const DescricaoOpcaoQuatro = document.getElementById('DescricaoOpcaoQuatro');

    const opcaoSeis = document.getElementById('opcaoSeis');
    const DescricaoOpcaoSeis = document.getElementById('DescricaoOpcaoSeis');

    const opcaoSete = document.getElementById('opcaoSete');
    const DescricaoOpcaoSete = document.getElementById('DescricaoOpcaoSete');

    const opcaoNove = document.getElementById('opcaoNove');
    const DescricaoOpcaoNove = document.getElementById('DescricaoOpcaoNove');

    const opcaoZeroZero = document.getElementById('opcaoZeroZero');
    const DescricaoOpcaoZeroZero = document.getElementById('DescricaoOpcaoZeroZero');
}

export function criarOpcao(texto) {
    const divOpcoes = document.getElementById('opcoes');

    const opcao = document.createElement('div');
    opcao.classList.add('opcao');
    opcao.setAttribute('id', 'opcaoPonto');

    const opcaoInfo = document.createElement('div');
    opcaoInfo.classList.add('opcoesInfo');
    opcao.appendChild(opcaoInfo);

    const numeroOpcao = document.createElement('p');
    numeroOpcao.classList.add('numeroOpcao');
    numeroOpcao.innerHTML = '.'
    opcaoInfo.appendChild(numeroOpcao);

    const descricaoOpcao = document.createElement('p');
    descricaoOpcao.classList.add('descricaoOpcao');
    descricaoOpcao.setAttribute('id', 'DescricaoOpcaoPonto');
    descricaoOpcao.innerHTML = texto;
    opcaoInfo.appendChild(descricaoOpcao);

    divOpcoes.appendChild(opcao);

}

export function removerOpcao() {
    document.getElementById('opcaoPonto').remove();
}

export function mudarTexto(opcao, texto) {
    opcao.innerHTML = texto;
}

export function menuInicial() {
    mudarTexto(DescricaoOpcaoUm, 'Levantamentos');
    mudarTexto(DescricaoOpcaoTres, 'MBWay');
    mudarTexto(DescricaoOpcaoQuatro, 'Consultas');
    mudarTexto(DescricaoOpcaoSeis, 'Descontos MB');
    mudarTexto(DescricaoOpcaoSete, 'Transferencias');
    mudarTexto(DescricaoOpcaoNove, 'Vouchers');
    mudarTexto(DescricaoOpcaoZeroZero, 'Depósitos');

    retirarEventListenerATodos();

    opcaoUm.addEventListener('click', menuLevantamentos.menuLevantamentos);
    opcaoTres.addEventListener('click', menuMbWay.menuMbWay);
    opcaoQuatro.addEventListener('click', menuConsultas.menuConsultas);
    opcaoNove.addEventListener('click', menuVouchers.menuVouchers);
    opcaoZeroZero.addEventListener('click', menuDepositos.menuDepositos);
}

export function retirarEventListener(opcao) {
    opcao.replaceWith(opcao.cloneNode(true));
}

export function retirarEventListenerATodos(opcao) {
    retirarEventListener(opcaoUm)
    retirarEventListener(opcaoTres)
    retirarEventListener(opcaoQuatro)
    retirarEventListener(opcaoSeis)
    retirarEventListener(opcaoSete)
    retirarEventListener(opcaoNove)
    retirarEventListener(opcaoZeroZero)
}


export function esconderOpcoes() {
    opcoes.classList.add('displayNone');
}

export function reaparecerOpcoes() {
    opcoes.classList.remove('displayNone');
}

export function esconderOpcao(opcao) {
    opcao.classList.add('displayNone');
}

export function reaparecerOpcao(opcao) {
    opcao.classList.remove('displayNone');
}

export function semOpacidade(opcao) {
    opcao.classList.add('opacidadeZero');
}

export function voltarOpacidade(opcao) {
    opcao.classList.remove('opacidadeZero');
}

export function menuEscrita() {
    const barraBackground = document.createElement('div');
    barraBackground.classList.add('barraBackground');
    barraBackground.setAttribute('id', 'barraBackgroundId');

    const montante = document.createElement('p');
    montante.classList.add('montante');
    montante.innerHTML = 'Introduza o montante';
    barraBackground.appendChild(montante);

    const inputMontante = document.createElement('input');
    inputMontante.classList.add('inputMontante');
    barraBackground.appendChild(inputMontante);

    inputMontante.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            if (isNaN(parseInt(inputMontante.value))) {
                alert('You must enter a number!');
            }
        }

    })
    document.getElementById('multibanco').appendChild(barraBackground)
}

export function inserirDadosUser(clienteNumero, clienteNome, clienteNif, balcaoNumero, saldo, mbWay, nib, iban) {

    const clienteNumeroHtml = document.getElementById('clienteNumero');
    const clienteNomeHtml = document.getElementById('clienteNome');
    const clienteNifHtml = document.getElementById('clienteNif');
    const balcaoNumeroHtml = document.getElementById('balcaoNumero');
    const saldoHtml = document.getElementById('saldo');
    const mbWayHtml = document.getElementById('mbWay');
    const nibHtml = document.getElementById('nib');
    const ibanHtml = document.getElementById('iban');

    clienteNumeroHtml.innerHTML = clienteNumero;
    clienteNomeHtml.innerHTML = clienteNome;
    clienteNifHtml.innerHTML = clienteNif;
    balcaoNumeroHtml.innerHTML = balcaoNumero;
    saldoHtml.innerHTML = `${saldo}€`;
    if (mbWay == false) {
        mbWayHtml.innerHTML = 'Não aderente';
    } else {
        mbWayHtml.innerHTML = 'Aderente';
    }
    nibHtml.innerHTML = nib;
    ibanHtml.innerHTML = iban;

}
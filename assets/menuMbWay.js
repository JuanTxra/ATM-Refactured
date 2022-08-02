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

export function menuMbWay() {
    funcoesBasicas.retirarEventListenerATodos();

    funcoesBasicas.esconderOpcao(opcaoUm);
    funcoesBasicas.esconderOpcao(opcaoTres);
    funcoesBasicas.esconderOpcao(opcaoQuatro);
    funcoesBasicas.esconderOpcao(opcaoSeis);
    funcoesBasicas.esconderOpcao(opcaoSete);
    funcoesBasicas.esconderOpcao(opcaoNove);
    funcoesBasicas.mudarTexto(DescricaoOpcaoZeroZero, 'Aderir');

    menuAderir();

}

function menuAderir() {
    let aderente = false;

    if (aderente) {
        funcoesBasicas.esconderOpcao(opcaoZeroZero);
        const barraBackground = document.createElement('div');
        barraBackground.classList.add('barraBackground');

        const montante = document.createElement('p');
        montante.classList.add('montante');
        montante.innerHTML = 'Já é aderente do MBWay!';
        barraBackground.appendChild(montante);

        document.getElementById('multibanco').insertBefore(barraBackground, document.getElementById('multibanco').firstChild)

        let intervalMBWayAderente = setInterval(() => {
            barraBackground.remove();
            funcoesBasicas.reaparecerOpcao(opcaoUm);
            funcoesBasicas.reaparecerOpcao(opcaoTres);
            funcoesBasicas.reaparecerOpcao(opcaoQuatro);
            funcoesBasicas.reaparecerOpcao(opcaoSeis);
            funcoesBasicas.reaparecerOpcao(opcaoSete);
            funcoesBasicas.reaparecerOpcao(opcaoNove);
            funcoesBasicas.reaparecerOpcao(opcaoZeroZero);
            menuInicial();
            clearInterval(intervalMBWayAderente);
        }, 2000);

    } else {
        funcoesBasicas.criarOpcao('Menu Inicial');

        opcaoPonto.addEventListener('click', () => {
            funcoesBasicas.reaparecerOpcao(opcaoUm);
            funcoesBasicas.reaparecerOpcao(opcaoTres);
            funcoesBasicas.reaparecerOpcao(opcaoQuatro);
            funcoesBasicas.reaparecerOpcao(opcaoSeis);
            funcoesBasicas.reaparecerOpcao(opcaoSete);
            funcoesBasicas.reaparecerOpcao(opcaoNove);
            document.getElementsByClassName('barraBackground')[0].remove();
            funcoesBasicas.removerOpcao();
            funcoesBasicas.menuInicial();
        });

        const barraBackground = document.createElement('div');
        barraBackground.classList.add('barraBackground');

        const montante = document.createElement('p');
        montante.classList.add('montante');
        montante.innerHTML = 'Adesão ao MBWay!';
        barraBackground.appendChild(montante);

        document.getElementById('multibanco').insertBefore(barraBackground, document.getElementById('multibanco').firstChild)

        opcaoZeroZero.addEventListener('click', () => {
            barraBackground.remove();
            montante.remove();
            menuConfirmacao();
        });
    }

}


function menuConfirmacao() {
    const barraBackground = document.createElement('div');
    barraBackground.classList.add('barraBackground');

    const montante = document.createElement('p');
    montante.classList.add('montante');
    montante.innerHTML = 'Confirma que pretende aderir?';
    barraBackground.appendChild(montante);

    funcoesBasicas.mudarTexto(DescricaoOpcaoZeroZero, 'Confirmar');
    funcoesBasicas.retirarEventListener(opcaoZeroZero);

    opcaoZeroZero.addEventListener('click', () => {
        montante.classList.add('greenText');
        montante.innerHTML = 'É agora aderente do MBWay!';
        conta.mbway = true;
        document.getElementById('mbWay').innerHTML = 'Aderente'
        let intervalMBWay = setInterval(() => {
            funcoesBasicas.reaparecerOpcao(opcaoUm);
            funcoesBasicas.reaparecerOpcao(opcaoTres);
            funcoesBasicas.reaparecerOpcao(opcaoQuatro);
            funcoesBasicas.reaparecerOpcao(opcaoSeis);
            funcoesBasicas.reaparecerOpcao(opcaoSete);
            funcoesBasicas.reaparecerOpcao(opcaoNove);
            barraBackground.remove();
            funcoesBasicas.removerOpcao();
            funcoesBasicas.menuInicial();
            clearInterval(intervalMBWay);
        }, 3000);
    });

    document.getElementById('multibanco').insertBefore(barraBackground, document.getElementById('multibanco').firstChild)
}

funcoesBasicas.buscarOpcoes();

opcaoTres.addEventListener('click', menuMbWay)
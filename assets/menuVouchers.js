import {
    Cliente
} from "./Cliente.js";
import {
    Conta
} from "./Conta.js";
import * as funcoesBasicas from "./funcoesBasicas.js";

export function menuVouchers() {
    funcoesBasicas.retirarEventListenerATodos();

    funcoesBasicas.semOpacidade(opcaoUm);
    funcoesBasicas.semOpacidade(opcaoTres);
    funcoesBasicas.semOpacidade(opcaoQuatro);
    funcoesBasicas.semOpacidade(opcaoSeis);
    funcoesBasicas.semOpacidade(opcaoSete);
    funcoesBasicas.semOpacidade(opcaoNove);

    funcoesBasicas.mudarTexto(DescricaoOpcaoZeroZero, 'Verificar');
    funcoesBasicas.criarOpcao('Menu Inicial');

    opcaoPonto.addEventListener('click', () => {
        funcoesBasicas.voltarOpacidade(opcaoUm);
        funcoesBasicas.voltarOpacidade(opcaoTres);
        funcoesBasicas.voltarOpacidade(opcaoQuatro);
        funcoesBasicas.voltarOpacidade(opcaoSeis);
        funcoesBasicas.voltarOpacidade(opcaoSete);
        funcoesBasicas.voltarOpacidade(opcaoNove);
        funcoesBasicas.menuInicial();
        funcoesBasicas.removerOpcao();
    });

    opcaoZeroZero.addEventListener('click', verificarVouchers);
}

function verificarVouchers() {
    const barraBackground = document.createElement('div');
    barraBackground.classList.add('barraBackground');

    const voucherAnimation = document.createElement('div');
    voucherAnimation.classList.add('voucherAnimation');
    barraBackground.appendChild(voucherAnimation);

    document.getElementById('multibanco').insertBefore(barraBackground, document.getElementById('multibanco').firstChild)

    let intervalVoucherAnimation = setInterval(() => {
        voucherAnimation.remove();
        const texto = document.createElement('p');
        texto.classList.add('montante');
        texto.innerHTML = 'Infelizmente não tem acesso a nenhum voucher. <br><br> Tente novamente mais tarde!';
        barraBackground.appendChild(texto);
        clearInterval(intervalVoucherAnimation);
        let intervalVoucher = setInterval(() => {
            funcoesBasicas.voltarOpacidade(opcaoUm);
            funcoesBasicas.voltarOpacidade(opcaoTres);
            funcoesBasicas.voltarOpacidade(opcaoQuatro);
            funcoesBasicas.voltarOpacidade(opcaoSeis);
            funcoesBasicas.voltarOpacidade(opcaoSete);
            funcoesBasicas.voltarOpacidade(opcaoNove);
            barraBackground.remove();
            funcoesBasicas.removerOpcao();
            funcoesBasicas.menuInicial();
            clearInterval(intervalVoucher);
        }, 3000);
    }, 3000);


}

opcaoNove.addEventListener('click', menuVouchers)
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

console.log('teste')

export function menuLevantamentos() {
    funcoesBasicas.retirarEventListenerATodos();

    funcoesBasicas.mudarTexto(DescricaoOpcaoUm, '20€');
    funcoesBasicas.mudarTexto(DescricaoOpcaoTres, '40€');
    funcoesBasicas.mudarTexto(DescricaoOpcaoQuatro, '60€');
    funcoesBasicas.mudarTexto(DescricaoOpcaoSeis, '100€');
    funcoesBasicas.mudarTexto(DescricaoOpcaoSete, '150€');
    funcoesBasicas.mudarTexto(DescricaoOpcaoNove, '200€');
    funcoesBasicas.mudarTexto(DescricaoOpcaoZeroZero, 'Outros Valores');

    funcoesBasicas.criarOpcao('Outras Opções');

    opcaoLevantarDinheiro(opcaoUm, 20);
    opcaoLevantarDinheiro(opcaoTres, 40);
    opcaoLevantarDinheiro(opcaoQuatro, 60);
    opcaoLevantarDinheiro(opcaoSeis, 100);
    opcaoLevantarDinheiro(opcaoSete, 150);
    opcaoLevantarDinheiro(opcaoNove, 200);
    opcaoLevantarDinheiro(opcaoZeroZero, 'Outros');
    opcaoLevantarDinheiro(opcaoPonto, 0);


}

function opcaoLevantarDinheiro(opcao, valor) {
    opcao.addEventListener('click', () => {
        if (valor == 0) {
            funcoesBasicas.menuInicial();
            funcoesBasicas.removerOpcao();
        } else if (valor == 'Outros') {
            funcoesBasicas.esconderOpcoes();
            funcoesBasicas.menuEscrita();
            document.getElementsByClassName('inputMontante')[0].addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    valor = document.getElementsByClassName('inputMontante')[0].value;
                    levantarDinheiro(valor)
                    funcoesBasicas.reaparecerOpcoes();
                    document.getElementById('barraBackgroundId').remove();
                    funcoesBasicas.menuInicial();
                }
            })
        } else {
            levantarDinheiro(valor);
            funcoesBasicas.menuInicial();
        }
    })

}

function levantarDinheiro(valor) {
    if (valor > conta.saldo) {
        alert('You dont own that amount of money!');
    } else {
        conta.levantarDinheiro(valor);
        document.getElementById('saldo').innerHTML = `${conta.saldo}€`;
    }

    funcoesBasicas.removerOpcao();
    funcoesBasicas.menuInicial();
}

funcoesBasicas.buscarOpcoes();

opcaoUm.addEventListener('click', menuLevantamentos);
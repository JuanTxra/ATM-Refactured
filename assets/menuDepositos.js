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

export function menuDepositos() {
    funcoesBasicas.retirarEventListenerATodos();

    funcoesBasicas.mudarTexto(DescricaoOpcaoUm, '20€');
    funcoesBasicas.mudarTexto(DescricaoOpcaoTres, '40€');
    funcoesBasicas.mudarTexto(DescricaoOpcaoQuatro, '60€');
    funcoesBasicas.mudarTexto(DescricaoOpcaoSeis, '100€');
    funcoesBasicas.mudarTexto(DescricaoOpcaoSete, '150€');
    funcoesBasicas.mudarTexto(DescricaoOpcaoNove, '200€');
    funcoesBasicas.mudarTexto(DescricaoOpcaoZeroZero, 'Outros Valores');

    funcoesBasicas.criarOpcao('Outras Opções');

    opcaoDepositarDinheiro(opcaoUm, 20);
    opcaoDepositarDinheiro(opcaoTres, 40);
    opcaoDepositarDinheiro(opcaoQuatro, 60);
    opcaoDepositarDinheiro(opcaoSeis, 100);
    opcaoDepositarDinheiro(opcaoSete, 150);
    opcaoDepositarDinheiro(opcaoNove, 200);
    opcaoDepositarDinheiro(opcaoZeroZero, 'Outros');
    opcaoDepositarDinheiro(opcaoPonto, 0);


}

function opcaoDepositarDinheiro(opcao, valor) {
    opcao.addEventListener('click', () => {
        if (valor == 0) {
            funcoesBasicas.retirarEventListener(opcaoUm)
            funcoesBasicas.retirarEventListener(opcaoTres)
            funcoesBasicas.retirarEventListener(opcaoQuatro)
            funcoesBasicas.retirarEventListener(opcaoSeis)
            funcoesBasicas.retirarEventListener(opcaoSete)
            funcoesBasicas.retirarEventListener(opcaoNove)
            funcoesBasicas.retirarEventListener(opcaoZeroZero)
            funcoesBasicas.menuInicial();
            funcoesBasicas.removerOpcao();
        } else if (valor == 'Outros') {
            funcoesBasicas.esconderOpcoes();
            funcoesBasicas.menuEscrita();
            document.getElementsByClassName('inputMontante')[0].addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    valor = document.getElementsByClassName('inputMontante')[0].value;
                    depositarDinheiro(valor)
                    funcoesBasicas.reaparecerOpcoes();
                    document.getElementById('barraBackgroundId').remove();
                    funcoesBasicas.menuInicial();
                }
            })
        } else {
            depositarDinheiro(valor);
            funcoesBasicas.retirarEventListener(opcaoUm)
            funcoesBasicas.retirarEventListener(opcaoTres)
            funcoesBasicas.retirarEventListener(opcaoQuatro)
            funcoesBasicas.retirarEventListener(opcaoSeis)
            funcoesBasicas.retirarEventListener(opcaoSete)
            funcoesBasicas.retirarEventListener(opcaoNove)
            funcoesBasicas.retirarEventListener(opcaoZeroZero)
            funcoesBasicas.menuInicial();
        }
    })

}

function depositarDinheiro(valor) {
    conta.depositarDinheiro(valor);
    document.getElementById('saldo').innerHTML = `${conta.saldo}€`;
    funcoesBasicas.removerOpcao();
    funcoesBasicas.menuInicial();
}

funcoesBasicas.buscarOpcoes();

opcaoZeroZero.addEventListener('click', menuDepositos);
import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../service/NegociacaoService';

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    private _service = new NegociacaoService();

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    adiciona() {

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (this.DiaUtil(data)) {
            this._mensagemView.update('Não é possível registrar negociações aos finais de semana, volte no próximo dia útil.');
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.addNegociacao(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    private DiaUtil(data: Date) {
        if (data.getDay() == DiaDaSemana.Domingo || data.getDay() == DiaDaSemana.Sabado)
            return true;
    }

    @throttle()
    importaDados() {
     
        this._service
            .obterNegociacoes((res: Response) => {
                if(res.ok) return res;
                throw new Error(res.statusText);
            })
            .then((negociacoes: Negociacao[]) => {
                negociacoes.forEach(negociacao =>
                    this._negociacoes.addNegociacao(negociacao));
                this._negociacoesView.update(this._negociacoes);
            });
    }

    limpaNegociacoes() {
        console.log('limpando tabela...');

        this._negociacoes.removeNegociacao();
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociações excluídas com sucesso.');
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}
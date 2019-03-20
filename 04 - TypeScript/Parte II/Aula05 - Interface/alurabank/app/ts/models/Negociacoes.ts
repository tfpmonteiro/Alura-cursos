import { Negociacao } from './Negociacao';
import { MeuObjeto } from './meuObjeto';


export class Negociacoes implements MeuObjeto<Negociacoes> {

    private _negociacoes: Negociacao[] = [];

    addNegociacao(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    removeNegociacao(): void {

        this._negociacoes.splice(0, this._negociacoes.length);
    }

    paraTexto(): void {
        console.log('************ PARA TEXTO ************');
        console.log(JSON.stringify(this._negociacoes));
    }

    igual(negociacoes: Negociacoes): boolean{
        
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray());
    }
}

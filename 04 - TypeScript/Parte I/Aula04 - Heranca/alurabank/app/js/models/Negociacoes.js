class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    addNegociacao(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
}

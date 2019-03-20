System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(_data, _quantidade, _valor) {
                    this._data = _data;
                    this._quantidade = _quantidade;
                    this._valor = _valor;
                }
                get volume() {
                    return this._quantidade * this._valor;
                }
                paraTexto() {
                    console.log('************ PARA TEXTO ************');
                    console.log(`Data: ${this._data}
            Quantidade: ${this._quantidade}
            Valor: R$${this._valor}
            Volume: ${this.volume}`);
                }
                igual(negociacao) {
                    return this._data.getDate() == negociacao._data.getDate()
                        && this._data.getMonth() == negociacao._data.getMonth()
                        && this._data.getFullYear() == negociacao._data.getFullYear();
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});

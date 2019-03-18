class Negociacao {

    /*
    private _data: Date;
    private _quantidade: number;
    private _valor = number;

    constructor(data: Date, quanitdade: number, valor: number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    Tudo isso pode ser resumido no construtor abaixo que já declara a variável tipada com o nível de acesso.
    */

    constructor(private _data: Date, private _quantidade: number, private _valor: number) {}

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

}
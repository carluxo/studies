export class Cpf {
    constructor() {
        this._codigo = "CPF não informado";
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(value) {
        this._codigo = value.replace(/^(\d{3})(\d{3})?(\d{3})?(\d{2})?/, "$1.$2.$3-$4");
    }

    limpar() {
        this.codigo = "CPF não informado";
    }
}
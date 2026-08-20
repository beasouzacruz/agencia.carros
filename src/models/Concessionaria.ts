export class Concessionaria{
    id: number | any;
    nome: String;
    cnpj: String;
    cidade: String;

    constructor(nome: String, cnpj: String, cidade: String, id: any = null){
        this.id = id;
        this.nome = nome;
        this.cnpj = cnpj;
        this.cidade = cidade;
    }
}
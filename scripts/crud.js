var produtos = new Array();

class Produto {
    constructor(id, nome, preco, validade) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.validade = validade;
    }

    // get id() {
    //     return this.id;
    // }
    // get nome() {
    //     return this.nome;
    // }
    // get preco() {
    //     return this.preco;
    // }
    // get validade() {
    //     return this.validade;
    // }

    create() {
        Produto.lastIndex++;
        this.id = Produto.lastIndex;
        produtos.push(this);
    }

    static read(id) {
        return produtos.filter(x => x.id === id);
    }

    readAll(){
        return produtos;
    }

    update(nome, preco, validade) {
        this.nome = nome;
        this.preco = preco;
        this.validade = validade;
    }

    delete(id) {
        produtos = produtos.filter(x => x.id !== id);
    }
}
Produto.lastIndex = 0;
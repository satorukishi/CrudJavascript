var produtos = new Array();

class Produto {
    constructor(id, nome, preco, validade) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.validade = validade;
    }

    create() {
        Produto.lastIndex++;
        this.id = Produto.lastIndex;
        produtos.push(this);
    }

    static read(id) {
        return produtos.filter(x => x.id == id)[0];
    }

    static readAll(){
        return produtos;
    }

    update(nome, preco, validade) {
        this.nome = nome;
        this.preco = preco;
        this.validade = validade;
    }

    static delete(id) {
        produtos = produtos.filter(x => x.id != id);
    }
}
Produto.lastIndex = 0;
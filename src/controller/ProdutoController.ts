import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository ";

export class ProdutoController implements ProdutoRepository{
    listaProdutos = new Array<Produto>();

    public id: number = 0;

    procurarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            buscaProduto.visualizar();
        } else
            console.log("\nO Produto id: " + id+ " não foi encontrado!");
    }

    listarTodas(): void {
        
        this.listaProdutos.forEach(produto => produto.visualizar());
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("O produto foi cadastrado com sucesso!")
    }

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("\nO Produto id: " + produto.id + " foi atualizado com sucesso!");
        } else
            console.log("\nO Produto id: " + produto.id + " não foi encontrado!");
    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
        	console.log("\nO Produto id: " + id + " foi apagado com sucesso!");
        }else
        console.log("\nO Produto id: " + id + " não foi encontrado!");
    }

    /*Métodos Auxiliares*/

    /*Gerar Id do Produto*/
    public gerarId(): number {
        return ++this.id;
    }

    /*Checar se um Produto existe*/
    public buscarNoArray(id: number): Produto | null {

        for (let produto of this.listaProdutos) {
            if (produto.id === id)
                return produto;
        }
        
        return null;
    }
    }



    

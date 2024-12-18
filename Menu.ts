import readlinesync = require("readline-sync");
import { ProdutoController } from "./src/controller/ProdutoController";
import { Bebida } from "./src/model/Bebida";
import { Lanche } from "./src/model/Lanche";

export function main() {

    let opcao, id, tipo, preco: number
    let quantidade = 0;
	let nome, temperatura, pontoCarne: string
	let tipoProduto = ['Bebida', 'Lanche']

	// Instanciar um Objeto da Classe ProdutoController
	const produtoController = new ProdutoController()

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                LANCHE BÃO             ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar Produto por ID              ");
        console.log("            4 - Atualizar Produtos                   ");
        console.log("            5 - Apagar Produto                        ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log("\nLanche Bão: o sabor que conquista seu coração!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Produto\n\n");

                tipo =
					readlinesync.keyInSelect(tipoProduto, '', {
						cancel: false,
					}) + 1

                nome = readlinesync.question('Digite o Nome do Produto: ')

                preco = readlinesync.questionFloat('Digite o preco: ')

                switch (tipo) {
					case 1:
						temperatura = readlinesync.question(
							'Digite a temperatura da Bebida: '
						)
						produtoController.cadastrar(
							new Bebida(
								produtoController.gerarId(),
								nome,
								tipo,
								preco,
                                quantidade,
								temperatura
							)
						)

						break
					case 2:
						pontoCarne = readlinesync.question(
							'Digite o ponto da carne: '
						)
						produtoController.cadastrar(
							new Lanche(
								produtoController.gerarId(),
								nome,
								tipo,
								preco,
                                quantidade,
								pontoCarne
							)
						)
						break
				}
                break;
                
            case 2:
                console.log("\n\nListar todos os produtos \n\n");
                produtoController.listarTodas()

                break;
            case 3:
                console.log("\n\nConsultar produto pelo ID\n\n");

                id = readlinesync.questionInt('Digite o Id: ')
				produtoController.procurarPorId(id)

                break;
            case 4:
                console.log("\n\nAtualizar dados do produto pelo ID\n\n");

                id = readlinesync.questionInt('Digite o Id do Produto: ')

				// Verifica se o Produto existe
				let produto = produtoController.buscarNoArray(id)

				if (produto !== null) {
					nome = readlinesync.question('Digite o Nome do Produto: ')

					tipo = produto.tipo

					preco = readlinesync.questionFloat('Digite o preco: ')

                    switch (tipo) {
						case 1:
							temperatura = readlinesync.question(
								'Digite a Temperatura da Bebida '
							)

							produtoController.atualizar(
								new Bebida(id, nome, tipo, preco, quantidade, temperatura)
							)
							break
						case 2:
							pontoCarne = readlinesync.question(
								'Digite o Ponto da Carne: '
							)

							produtoController.atualizar(
								new Lanche(id, nome, tipo, preco, quantidade,pontoCarne)
							)
							break
					}
				} else console.log('Produto não Encontrado!')

                break;
            case 5:
                console.log("\n\nApagar Produto \n\n");

                id = readlinesync.questionInt('Digite o Id: ')
				produtoController.deletar(id)
                break;
            
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Simone Gonzaga ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/si-gonz");
    console.log("*****************************************************");
}

main();
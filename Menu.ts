import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

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

                break;
            case 2:
                console.log("\n\nListar todos os produtos \n\n");

                break;
            case 3:
                console.log("\n\nConsultar produto pelo ID\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados do produto pelo ID\n\n");

                break;
            case 5:
                console.log("\n\nApagar Produto \n\n");
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
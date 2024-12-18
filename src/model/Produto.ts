export abstract class Produto{
    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _preco: number;
    private _quantidade: number;


	constructor(id: number, nome: string, tipo: number, preco: number, quantidade: number) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
		this._preco = preco;
		this._quantidade = quantidade;
	}

	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get preco(): number {
		return this._preco;
	}

	public get quantidade(): number {
		return this._quantidade;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set preco(value: number) {
		this._preco = value;
	}

	public set quantidade(value: number) {
		this._quantidade = value;
	}
    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Bebida";
                break;
            case 2:
                tipo = "Lanche";
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados do Produto:");
        console.log("*****************************************************");
        console.log("Id: " + this._id);
        console.log("Nome: " + this._nome);
        console.log("Tipo: " + tipo);
        console.log("Quantidade: " + this._quantidade);
        console.log("Preço: R$ " + this._preco.toFixed(2));

    }
    
}
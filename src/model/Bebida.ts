import { Produto } from "./Produto";

export class Bebida extends Produto{
    private temperatura: string;

    constructor(id: number, nome: string, tipo: number, preco: number, quantidade: number, temperatura:string) {
        super(id, nome, tipo, preco, quantidade)
        this.temperatura = temperatura;
	}

	public get _temperatura(): string {
		return this.temperatura;
	}

	public set _temperatura(value: string) {
		this.temperatura = value;
	}

	public visualizar(): void {
        super.visualizar();
        console.log("A temperatura da bebida é: " + this._temperatura);
    }
    
}


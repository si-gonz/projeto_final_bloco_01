import { Produto } from "./Produto";

export class Lanche extends Produto{
    private _pontoCarne: string;

    constructor(id: number, nome: string, tipo: number, preco: number, quantidade: number, pontoCarne:string) {
        super(id, nome, tipo, preco, quantidade)
        this._pontoCarne = pontoCarne;
    }

	public get pontoCarne(): string {
		return this._pontoCarne;
	}

	public set pontoCarne(value: string) {
		this._pontoCarne = value;
	}

	public visualizar(): void {
        super.visualizar();
        console.log("O ponto da carne é: " + this._pontoCarne);
    }

}
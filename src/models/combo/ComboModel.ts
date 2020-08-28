import { EntityBase } from './../BaseModel';
import { CategoriaModel } from '../categoria/CategoriaModel';
import { LancheModel } from '../lanche/LancheModel';
import { BebidaModel } from '../bebida/BebidaModel';
import numeral from 'numeral';

export class ComboModel extends EntityBase {

    nome: string;
    tipoProduto: string;
    codigo: string;
    categoria: CategoriaModel;
    valor: number;
    valorTotal: number;
    bebidas: BebidaModel[];
    lanches: LancheModel[];

    //#region  bebidas
    viewUnicoBebida(id: number) {
        if (!this.bebidas || !Array.isArray(this.bebidas)) this.bebidas = [];
        const index = this.bebidas.findIndex(p => p.id === id);
        this.bebidas.splice(index, 1);

        this.calcularValoresLancheBebida();
    }
    viewDuplicarBebida(id: number) {
        if (!this.bebidas || !Array.isArray(this.bebidas)) this.bebidas = [];
        const produto = this.bebidas.find(p => p.id === id) as any;
        this.bebidas.push((produto));

        this.calcularValoresLancheBebida();
    }

    public viewSelecionarBebida(id: number, produtos: BebidaModel[]) {
        if (!this.bebidas || !Array.isArray(this.bebidas)) this.bebidas = [];
        const produto = produtos.find(c => c.id == id) as any;
        this.bebidas.push((<BebidaModel>produto));

        this.calcularValoresLancheBebida();
    }

    public viewRemoverBebida(id: number) {
        if (this.bebidas && Array.isArray(this.bebidas)) {
            this.bebidas = this.bebidas.filter(item => item.id !== id);
        }
        this.calcularValoresLancheBebida();
    }

    public contarQuantidadeBebida(id) {
        if (this.bebidas && Array.isArray(this.bebidas))
            return this.bebidas.filter(ingrediente => ingrediente.id == id).length;
        return [];
    }


    public bebidasFilter() {
        if (this.bebidas && Array.isArray(this.bebidas))
            return this.bebidas.filter((value, index, self) => self.indexOf(value) === index);

        return [];
    }
    //#endregion

    //#region  lanches
    public viewSelecionarLanche(id: number, produtos: LancheModel[]) {
        if (!this.lanches || !Array.isArray(this.lanches)) this.lanches = [];
        const produto = produtos.find(c => c.id == id) as any;
        this.lanches.push((<LancheModel>produto));

        this.calcularValoresLancheBebida();
    }

    public viewRemoverLanche(id: number) {
        if (this.lanches && Array.isArray(this.lanches)) {
            this.lanches = this.lanches.filter(item => item.id !== id);
        }
        this.calcularValoresLancheBebida();
    }

    public contarQuantidadeLanche(id) {
        if (this.lanches && Array.isArray(this.lanches))
            return this.lanches.filter(ingrediente => ingrediente.id == id).length;
        return [];
    }

    public calcularValoresLancheBebida() {
        this.valor =
            this.bebidas
                .reduce((valor, update) => numeral(valor).add(update.valor).value(), 0)
            +
            this.lanches
                .reduce((valor, update) => numeral(valor).add(update.valor).value(), 0);
    }

    public lanchesFilter() {
        if (this.lanches && Array.isArray(this.lanches))
            return this.lanches.filter((value, index, self) => self.indexOf(value) === index);

        return [];
    }

    public viewDuplicarLanche(id: number) {
        if (!this.lanches || !Array.isArray(this.lanches)) this.lanches = [];
        const produto = this.lanches.find(p => p.id === id) as any;
        this.lanches.push((produto));

        this.calcularValoresLancheBebida();
    }

    public viewUnicoLanche(id: number) {
        if (!this.lanches || !Array.isArray(this.lanches)) this.lanches = [];
        const index = this.lanches.findIndex(p => p.id === id);
        this.lanches.splice(index, 1);

        this.calcularValoresLancheBebida();
    }

    //#endregion

}

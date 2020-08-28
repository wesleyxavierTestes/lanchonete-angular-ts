import { EnumTipoProduto } from './../../enuns/produto/EnumTipoProduto';
import { EntityBase } from './../BaseModel';
import { CategoriaModel } from '../categoria/CategoriaModel';
import { IngredienteModel } from './IngredienteModel';
import numeral from 'numeral';

export class LancheModel extends EntityBase {


    codigo: string;
    categoria: CategoriaModel;
    pedido?: any;
    venda?: any;
    nome: string;
    valor: string;
    tipoProduto: string = EnumTipoProduto.Lanche;
    estoque: any[];
    estoqueAtual: number;
    custo: number;
    valorTotal: number;

    ingredientesLanche: IngredienteModel[];

    public viewSelecionarProduto(id: number, produtos: IngredienteModel []) {
        if (!this.ingredientesLanche || !Array.isArray(this.ingredientesLanche)) this.ingredientesLanche = [];
        const produto = produtos.find(p => p.id === id) as any;
        this.ingredientesLanche.push((<IngredienteModel>produto));

        this.calcularIngredientes();
    }

    public viewDuplicarItem(id: number) {
        if (!this.ingredientesLanche || !Array.isArray(this.ingredientesLanche)) this.ingredientesLanche = [];
        const produto = this.ingredientesLanche.find(p => p.id === id) as any;
        this.ingredientesLanche.push((<IngredienteModel>produto));

        this.calcularIngredientes();
    }

    public viewUnicoItem(id: number) {
        if (!this.ingredientesLanche || !Array.isArray(this.ingredientesLanche)) this.ingredientesLanche = [];
        const index = this.ingredientesLanche.findIndex(p => p.id === id);
        this.ingredientesLanche.splice(index, 1);

        this.calcularIngredientes();
    }

    public viewRemoverItem(id: number) {
        if (this.ingredientesLanche && Array.isArray(this.ingredientesLanche)) {
            this.ingredientesLanche = this.ingredientesLanche.filter(item => item.id !== id);
        }
        this.calcularIngredientes();
    }

    public contarQuantidade(id) {
        if (this.ingredientesLanche && Array.isArray(this.ingredientesLanche))
            return this.ingredientesLanche.filter(ingrediente => ingrediente.id == id).length;
        return [];
    }

    public calcularIngredientes() {
        this.valor =
            this.ingredientesLanche
                .reduce((valor, update) => numeral(valor).add(update.valor).value(), 0);
    }

    public ingredientesLancheFilter() {
        if (this.ingredientesLanche && Array.isArray(this.ingredientesLanche))
            return this.ingredientesLanche.filter((value, index, self) => self.indexOf(value) === index);

        return [];
    }
}
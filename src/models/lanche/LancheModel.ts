import { CategoriaModel } from '../categoria/CategoriaModel';
import { IngredienteModel } from './IngredienteModel';
export class LancheModel  {

    id: number;
    dataCadastro: string;
    ativo: boolean;
    codigo: string;
    categoria: CategoriaModel;
    pedido?: any;
    venda?: any;
    nome: string;
    valor: string;
    tipoProduto: string;
    estoque: any[];
    estoqueAtual: number;
    custo: number;
    valorTotal: number;

    ingredientesLanche: IngredienteModel[]

}
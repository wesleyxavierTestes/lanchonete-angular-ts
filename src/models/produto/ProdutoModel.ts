import { EntityBase } from './../BaseModel';
import { CategoriaModel } from '../categoria/CategoriaModel';

export class ProdutoModel extends EntityBase {

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
}

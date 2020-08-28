import { EntityBase } from './../BaseModel';
import { CategoriaModel } from './../categoria/CategoriaModel';

export class BebidaModel  extends EntityBase {

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

}
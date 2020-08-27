import { CategoriaModel } from '../categoria/CategoriaModel';

export class ProdutoModel {

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
}

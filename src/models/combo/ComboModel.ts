import { CategoriaModel } from '../categoria/CategoriaModel';
import { LancheModel } from '../lanche/LancheModel';
import { BebidaModel } from '../bebida/BebidaModel';
export class ComboModel  {

    id: number;
    ativo: boolean;
    nome: string;
    tipoProduto: string;
    codigo: string;
    categoria: CategoriaModel;
    valor: number;
    valorTotal: number;
    bebida: BebidaModel;
    lanche: LancheModel;

}

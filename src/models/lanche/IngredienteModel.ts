import { EnumTipoProduto } from '../../enuns/produto/EnumTipoProduto';

export class IngredienteModel {

    id: number;
    ativo: boolean;
    dataCadastro: string;
    nome: string;
    codigo: string;
    valor: number;
    tipoProduto: EnumTipoProduto;
}
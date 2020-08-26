import { EnumTipoProduto } from '../../enuns/produto/EnumTipoProduto';

export class PedidoItemModel  {

    id: number;
    ativo: boolean;
    nome: string;
    codigo: string;
    tipoProduto: EnumTipoProduto;
    
}
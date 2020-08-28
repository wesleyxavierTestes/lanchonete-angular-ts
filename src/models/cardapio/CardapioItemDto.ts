import { EntityBase } from './../BaseModel';
import { EnumTipoProduto } from '../../enuns/produto/EnumTipoProduto';
export class CardapioItemModel extends EntityBase {

    nome: string;
    codigo: string;
    tipoProduto: EnumTipoProduto;

}
import { EntityBase } from './../BaseModel';
import { EnumTipoProduto } from '../../enuns/produto/EnumTipoProduto';

export class IngredienteModel extends EntityBase {
    nome: string;
    codigo: string;
    valor: number;
    tipoProduto: EnumTipoProduto;
}
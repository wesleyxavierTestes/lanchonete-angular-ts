import { EntityBase } from './../BaseModel';
import { PedidoModel } from '../pedido/PedidoModel';

export class VendaModel extends EntityBase {

    valorDesconto?: string;
    valor?: string;
    valorTotal?: string;
    pedido?: PedidoModel;
}


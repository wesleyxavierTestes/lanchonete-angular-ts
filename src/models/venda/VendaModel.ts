import { PedidoModel } from '../pedido/PedidoModel';

export class VendaModel {

    id: number;
    ativo: boolean;
    valorDesconto?: number;
    valor?: number;
    valorTotal?: number;
    pedido?: PedidoModel;
}


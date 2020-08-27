import { PedidoModel } from '../pedido/PedidoModel';

export class VendaModel {

    id: number;
    ativo: boolean;
    valorDesconto?: string;
    valor?: string;
    valorTotal?: string;
    pedido?: PedidoModel;
}


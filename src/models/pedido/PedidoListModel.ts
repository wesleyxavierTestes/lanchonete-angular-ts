import { ClienteModel } from '../cliente/ClienteModel';
import { PedidoItemModel } from './PedidoItemModel';
import { EnumEstadoPedido } from '../../enuns/pedido/EnumEstadoPedido';

export class PedidoListModel {
    id: number;
    ativo: boolean;
    pedidoitens: PedidoItemModel[];
    codigo: string;
    valor: string;
    valorDesconto: string;
    valorTotal: string;
    cliente: ClienteModel;
    estado: EnumEstadoPedido;
    cancelado: boolean;
    dataCancelado?: any;
  }
  
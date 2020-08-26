import { PedidoItemModel } from './PedidoItemModel';
import { ClienteModel } from '../cliente/ClienteModel';
import { EnumEstadoPedido } from '../../enuns/pedido/EnumEstadoPedido';

export class PedidoModel  {

    id: number;
    ativo: boolean;
    dataCadastro: Date;
    codigo: string;
    valor: number;
    valorDesconto: number;
    valorTotal: number;
    cancelado: boolean;
    dataCancelado?: Date;
    estado: EnumEstadoPedido;
    cliente: ClienteModel;
    pedidoitens: PedidoItemModel[];
  }
  

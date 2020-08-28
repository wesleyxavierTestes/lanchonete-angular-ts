import { EntityBase } from './../BaseModel';
import { PedidoItemModel } from './PedidoItemModel';
import { ClienteModel } from '../cliente/ClienteModel';
import { EnumEstadoPedido } from '../../enuns/pedido/EnumEstadoPedido';

export class PedidoModel extends EntityBase  {

    codigo: string;
    valor: string;
    valorDesconto: string;
    valorTotal: string;
    cancelado: boolean;
    dataCancelado: string;
    estado: EnumEstadoPedido;
    cliente: ClienteModel;
    pedidoitens: PedidoItemModel[];
  }
  

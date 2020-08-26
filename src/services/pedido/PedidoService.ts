import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";
import { PedidoModel } from '../../models/pedido/PedidoModel';

export class PedidoService extends BaseService<PedidoModel> {
    
    constructor(protected $http) {
        super($http, 'pedido');
    }
}

sglanchoneteApp.service('PedidoService', PedidoService);
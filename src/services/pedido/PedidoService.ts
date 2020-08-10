import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";

export class PedidoService extends BaseService {
    
    constructor(protected $http) {
        super($http, 'pedido');
    }
}

sglanchoneteApp.service('PedidoService', PedidoService);
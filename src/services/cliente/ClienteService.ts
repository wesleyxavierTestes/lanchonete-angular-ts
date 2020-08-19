import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";

export class ClienteService extends BaseService {
    
    constructor(protected $http) {
        super($http, 'cliente');
    }
}

sglanchoneteApp.service('ClienteService', ClienteService);
import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";

export class CategoriaService extends BaseService {
    
    constructor(protected $http) {
        super($http, 'categoria');
    }
}

sglanchoneteApp.service('CategoriaService', CategoriaService);
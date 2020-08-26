import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";
import { CategoriaModel } from '../../models/categoria/CategoriaModel';

export class CategoriaService extends BaseService<CategoriaModel> {
    
    constructor(protected $http) {
        super($http, 'categoria');
    }
}

sglanchoneteApp.service('CategoriaService', CategoriaService);
import { LancheService } from './../../services/lanche/LancheService';
import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class LancheCadastroController extends BaseCadastroController<any, LancheService> {
    static $inject = ['LancheService', '$scope', '$route'];
    
    constructor(protected lancheService: LancheService, protected $scope, protected $route) {
        super(lancheService, $scope, $route);
        this.nome = 'Lanche';
     }
    protected updateComponent() {}
}
sglanchoneteApp.controller('LancheCadastroController', LancheCadastroController);
import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class LancheCadastroController extends BaseCadastroController<any> {
    static $inject = ['LancheService', '$scope', '$route'];
    
    constructor(protected lancheService, protected $scope, protected $route) {
        super(lancheService, $scope, $route);
        this.nome = 'Lanche';
    }

}
sglanchoneteApp.controller('LancheCadastroController', LancheCadastroController);
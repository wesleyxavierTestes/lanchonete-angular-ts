import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class LancheCadastroController extends BaseCadastroController<any> {
    static $inject = ['LancheService', '$scope'];
    
    constructor(protected lancheService, protected $scope) {
        super(lancheService, $scope);
        this.nome = 'Lanche';
    }

}
sglanchoneteApp.controller('LancheCadastroController', LancheCadastroController);
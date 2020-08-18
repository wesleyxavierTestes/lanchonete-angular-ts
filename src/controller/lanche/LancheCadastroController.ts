import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class LancheCadastroController extends BaseCadastroController<any> {
    static $inject = ['LancheService', '$rootScope'];
    
    constructor(protected lancheService, protected $rootScope) {
        super(lancheService, $rootScope);
        this.nome = 'Lanche';
    }

}
sglanchoneteApp.controller('LancheCadastroController', LancheCadastroController);
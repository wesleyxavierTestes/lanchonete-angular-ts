import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class LancheCadastroController extends BaseCadastroController<any> {
    static $inject = ['LancheService'];
    
    constructor(protected lancheService) {
        super(lancheService);
        this.nome = 'Lanche';
    }

}
sglanchoneteApp.controller('LancheCadastroController', LancheCadastroController);
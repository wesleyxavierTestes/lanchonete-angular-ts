import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class ComboCadastroController extends BaseCadastroController<any> {
    static $inject = ['ComboService'];

    constructor(protected comboService) {
        super(comboService);
        this.nome = 'Combo';
    }

}
sglanchoneteApp.controller('ComboCadastroController', ComboCadastroController);
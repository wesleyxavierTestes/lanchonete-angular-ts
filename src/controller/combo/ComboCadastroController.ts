import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class ComboCadastroController extends BaseCadastroController<any> {
    static $inject = ['ComboService', '$rootScope'];

    constructor(protected comboService, protected $rootScope) {
        super(comboService, $rootScope);
        this.nome = 'Combo';
    }

}
sglanchoneteApp.controller('ComboCadastroController', ComboCadastroController);
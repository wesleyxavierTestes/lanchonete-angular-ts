import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class ComboCadastroController extends BaseCadastroController<any> {
    static $inject = ['ComboService', '$scope'];

    constructor(protected comboService, protected $scope) {
        super(comboService, $scope);
        this.nome = 'Combo';
    }

}
sglanchoneteApp.controller('ComboCadastroController', ComboCadastroController);
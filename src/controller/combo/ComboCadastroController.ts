import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class ComboCadastroController extends BaseCadastroController<any> {
    static $inject = ['ComboService', '$scope', '$route'];

    constructor(protected comboService, protected $scope, protected $route) {
        super(comboService, $scope, $route);
        this.nome = 'Combo';
    }

}
sglanchoneteApp.controller('ComboCadastroController', ComboCadastroController);
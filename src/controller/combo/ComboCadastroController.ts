import { ComboService } from './../../services/combo/ComboService';
import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class ComboCadastroController extends BaseCadastroController<any, ComboService> {
    static $inject = ['ComboService', '$scope', '$route'];

    constructor(protected comboService: ComboService, protected $scope, protected $route) {
        super(comboService, $scope, $route);
        this.nome = 'Combo';
    }
    protected updateComponent() {}
}
sglanchoneteApp.controller('ComboCadastroController', ComboCadastroController);
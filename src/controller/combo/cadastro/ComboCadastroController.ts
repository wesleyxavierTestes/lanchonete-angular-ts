import { ComboService } from './../../../services/combo/ComboService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';

export class ComboCadastroController extends BaseCadastroController<any, ComboService> {
    static $inject = ['ComboService', '$scope', '$route', '$location'];

    constructor(protected comboService: ComboService, protected $scope, protected $route, protected $location) {
        super(comboService, $scope, $route, $location);
        this.nome = 'Combo';
    }
    protected updateComponent() {}
}
sglanchoneteApp.component('combocadastro', 
{
    controller: ComboCadastroController,
    controllerAs: 'view',
    template: require('./combo.cadastro.html')
});
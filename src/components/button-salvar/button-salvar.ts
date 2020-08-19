import sglanchoneteApp from "../../app";

export class ButtonSalvarModal {
    //public editar: boolean;
    constructor(private $scope) {
        
    }

    $onInit() {
        this.$scope.ctrl.editar;
    }
   // 'ngInject';
}
const appRootConfigure = function () {
    return {
        template: `<button type="submit" class="btn btn-primary">{{ ctrl.editar ? 'Atualizar' : 'Salvar'}}</button>`,
        controller: ButtonSalvarModal,
        bindings: {
            editar: '='
        }
    };
};
sglanchoneteApp.component('buttonSalvar', appRootConfigure());
import sglanchoneteApp from "../../app";

export class ButtonSalvarModal {
    editar: boolean;
    constructor() {    }

    $onInit() {
        this.editar;
    }
}
const appRootConfigure = function () {
    return {
        template: `<button type="submit" class="btn btn-primary">{{ $ctrl.editar ? 'Atualizar' : 'Salvar'}}</button>`,
        controller: ButtonSalvarModal,
        bindings: {
            editar: '='
        }
    };
};
sglanchoneteApp.component('buttonSalvar', appRootConfigure());
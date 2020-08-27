import sglanchoneteApp from "../../app";

export class ButtonSalvarModal {
    editar: boolean;
    constructor(private $state) { }

    viewNavegar(event: Event) {
        event.preventDefault();
        const roraEdicao = this.$state.$current.name.replace("edicao", "cadastro")
        this.$state.go(roraEdicao);
    }
}
const appRootConfigure = function () {
    return {
        template: `
        <button type="submit" class="btn btn-primary">{{ $ctrl.editar ? 'Atualizar' : 'Salvar'}}</button>
        <button type="buuton" ng-if="$ctrl.editar" ng-click="$ctrl.viewNavegar($event)" class="btn btn-secondary">{{ 'novo' }}</button>
        `,
        controller: ButtonSalvarModal,
        bindings: {
            editar: '='
        }
    };
};
sglanchoneteApp.component('buttonSalvar', appRootConfigure());
import sglanchoneteApp from "../../app";

export class BaseCadastroModal {

    constructor($scope: any) {
     }
}
const appRootConfigure = function () {
    return {
        template: require('./../../components/base-cadastro-modal/base-cadastro-modal.html'),
        transclude: true,
        controller: BaseCadastroModal,
        scope: {
            nome: '='
        }
    };
};
sglanchoneteApp.directive('cadastroModal', appRootConfigure);
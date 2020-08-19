import sglanchoneteApp from "../../app";

export class BaseCadastro {

    constructor($scope: any) {
     }
}
const appRootConfigure = function () {
    return {
        template: require('./../../components/base-cadastro/base-cadastro.html'),
        transclude: true,
        controller: BaseCadastro,
        scope: {
            nome: '='
        }
    };
};
sglanchoneteApp.directive('cadastro', appRootConfigure);
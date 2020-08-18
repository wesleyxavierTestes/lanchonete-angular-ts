import sglanchoneteApp from "../../app";


export class Acoes {
    constructor($scope: any) {
       $scope.viewAlterar = () => {
            $scope.outAlterar();
        }

        $scope.viewExcluir = () => {
            $scope.outExcluir();
        }
    }
}
export const appRootConfigure = function () {
    return {
        templateUrl: './views/acoes/acoes.html',
        controller: Acoes,
        scope: {
            outAlterar: '&',
            outExcluir: '&'
        }
    };
};
sglanchoneteApp.directive('acoes', appRootConfigure);
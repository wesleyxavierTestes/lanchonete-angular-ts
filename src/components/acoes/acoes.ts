import sglanchoneteApp from "../../app";


export class Acoes {
    constructor($scope: any) {
        $scope.alterarAtivo =  $scope.alterarAtivo == undefined ? true :  $scope.alterarAtivo;
        $scope.excluirAtivo = $scope.excluirAtivo == undefined ? true : $scope.excluirAtivo;

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
        template: `
            <div class="col-12" style="">
                <div class="row">
                    <div class="col-3">
                        <!-- <button alt="Alterar" type="button" ng-click="viewAlterar()" class="btn btn-primary">
                        //     <i class="fas fa-edit"></i>
                        // </button> -->
                    </div>
                    <div class="col-3">
                        <button ng-if="alterarAtivo" alt="Alterar" type="button" ng-click="viewAlterar()" class="btn btn-primary">
                            <i class="fas fa-edit"></i>
                        </button>
                    </div>
                    <div class="col-3">
                        <button ng-if="excluirAtivo" alt="Excluir" type="button" ng-click="viewExcluir()" class="btn btn-danger">
                            <i class="fas fa-trash" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        `,
        controller: Acoes,
        scope: {
            excluirAtivo: '@',
            alterarAtivo: '@',
            outAlterar: '&',
            outExcluir: '&'
        }
    };
};
sglanchoneteApp.directive('acoes', appRootConfigure);
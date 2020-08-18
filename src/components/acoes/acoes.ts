import sglanchoneteApp from "../../app";

class Acoes {
    constructor($scope: any) {
        $scope.ativoAtivo = $scope.ativoAtivo == undefined ? false : $scope.ativoAtivo;
        $scope.desativoAtivo = $scope.desativoAtivo == undefined ? false : $scope.desativoAtivo;

        $scope.alterarAtivo = $scope.alterarAtivo == undefined ? true : $scope.alterarAtivo;
        $scope.excluirAtivo = $scope.excluirAtivo == undefined ? true : $scope.excluirAtivo;

        $scope.viewAtivo = () => {
            $scope.outAtivo();
        }

        $scope.viewDesativo = () => {
            $scope.outDesativo();
        }

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
                        <button ng-if="ativoAtivo" alt="Ativo" type="button" ng-click="viewAtivo()" class="btn btn-success">
                            <i class="fas fa-eye"></i>
                        </button> 
                    </div>
                    <div class="col-3">
                        <button ng-if="desativoAtivo" alt="Desativo" type="button" ng-click="viewDesativo()" class="btn btn-secondary">
                            <i class="fas fa-eye-slash"></i>
                        </button> 
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
            ativoAtivo: '=',
            desativoAtivo: '=',

            excluirAtivo: '=',
            alterarAtivo: '=',
            
            outAtivo: '&',
            outDesativo: '&',

            outAlterar: '&',
            outExcluir: '&'
        }
    };
};
sglanchoneteApp.directive('acoes', appRootConfigure);
import sglanchoneteApp from "../../app";

class Acoes {
    constructor($scope: any) {
        if (!$scope.config) 
            $scope.config = { };

        $scope.config.ativo = $scope.config.ativo == undefined ? false : $scope.config.ativo;
        $scope.config.usarAtivacao = $scope.config.usarAtivacao == undefined ? false : $scope.config.usarAtivacao;
        $scope.config.alterarAtivo = $scope.config.alterarAtivo == undefined ? true : $scope.config.alterarAtivo;
        $scope.config.excluirAtivo = $scope.config.excluirAtivo == undefined ? true : $scope.config.excluirAtivo;

        $scope.viewAtivo = () => {
            $scope.outAticao({ $event: true });
        }

        $scope.viewDesativo = () => {
            $scope.outAticao({ $event: false });
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
            <div class="col-12">
                <div class="row justify-content-end">
                    <div ng-if="config.usarAtivacao && !config.ativo" class="col-3">
                        <button alt="Ativo" type="button" ng-click="viewAtivo()" class="btn btn-success">
                            <i class="fas fa-eye"></i>
                        </button> 
                    </div>
                    <div ng-if="config.usarAtivacao && config.ativo" class="col-3">
                        <button alt="Desativo" type="button" ng-click="viewDesativo()" class="btn btn-secondary">
                            <i class="fas fa-eye-slash"></i>
                        </button> 
                    </div>
                    <div ng-if="config.alterarAtivo" class="col-3">
                        <a href="#!{{rota | lowercase }}/editacao">
                            <button alt="Alterar" type="button" ng-click="viewAlterar()" class="btn btn-primary">
                                <i class="fas fa-edit"></i>
                            </button>
                        </a>
                    </div>
                    <div ng-if="config.excluirAtivo" class="col-3">
                        <button alt="Excluir" type="button" ng-click="viewExcluir()" class="btn btn-danger">
                            <i class="fas fa-trash" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        `,
        controller: Acoes,
        scope: {
            config: '=',
            rota: '=',
            
            outAticao: '&',

            outAlterar: '&',
            outExcluir: '&'
        }
    };
};
sglanchoneteApp.directive('acoes', appRootConfigure);
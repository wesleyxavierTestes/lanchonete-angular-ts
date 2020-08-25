import sglanchoneteApp from "../../app";

class Acoes {
    constructor($scope: any) {
        $scope.show = false;
        
        if (!$scope.config) 
            $scope.config = { };

        $scope.config.ativo = $scope.config.ativo == undefined ? false : $scope.config.ativo;
        $scope.config.usarAtivacao = $scope.config.usarAtivacao == undefined ? false : $scope.config.usarAtivacao;
        $scope.config.alterarAtivo = $scope.config.alterarAtivo == undefined ? true : $scope.config.alterarAtivo;
        $scope.config.excluirAtivo = $scope.config.excluirAtivo == undefined ? true : $scope.config.excluirAtivo;

        $scope.viewShow = () => {
            $scope.show = !$scope.show;
        }

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
        template: require('./../../components/acoes/acoes.html'),
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
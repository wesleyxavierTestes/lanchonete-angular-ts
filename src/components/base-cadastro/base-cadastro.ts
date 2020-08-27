import sglanchoneteApp from "../../app";


const appRootConfigure = function ($state) {
    return {
        template: require('./../../components/base-cadastro/base-cadastro.html'),
        transclude: true,
        controller: function ($scope) {
            $scope.viewNavigate = () => {
                $state.go($scope.nome.toLowerCase() + 'cadastro');
            }
        },
        scope: {
            nome: '='
        }
    };
};
sglanchoneteApp.directive('cadastro', appRootConfigure);
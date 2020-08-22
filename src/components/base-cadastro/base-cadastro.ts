import sglanchoneteApp from "../../app";


const appRootConfigure = function ($state) {
    return {
        template: require('./../../components/base-cadastro/base-cadastro.html'),
        transclude: true,
        controller: function ($scope) {
            $scope.viewNavigate = (nome: string) => {
                //$state.go(nome.toLowerCase + 'cadastro');
                this.$location.path('/'+nome.toLowerCase + '/cadastro');
            }
        },
        scope: {
            nome: '='
        }
    };
};
sglanchoneteApp.directive('cadastro', appRootConfigure);
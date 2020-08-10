import sglanchoneteApp from "../../app";

sglanchoneteApp.directive('menulist', function () {
    return {
        templateUrl: './menuList.html',
        controller: function($scope) {
                $scope.viewCadastrar = () => {
                    alert('deu certo');
                }
        }
    };
});

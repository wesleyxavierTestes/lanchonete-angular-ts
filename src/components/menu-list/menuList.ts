import sglanchoneteApp from "../../app";

function meuListController($scope) {
    $scope.viewCadastrar = () => {
        alert('deu certo');
    };
};

sglanchoneteApp.directive('menulist', function () {
    return {
        templateUrl: './components/menu-list/menuList.html',
        controller: meuListController
    };
});
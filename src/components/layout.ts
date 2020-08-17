import sglanchoneteApp from "../app";

export const appRootConfigure = function () {
    return {
        templateUrl: './views/layout/layout.html',
        controller: function ($scope) {
            $scope.list = <Array<{ nome: string, href: string, ativo: string }>>[
                { ativo: 'active', }
            ]

            $scope.viewNavegar = (rota: string) => {

            }
        }
    };
};

sglanchoneteApp.directive('approot', appRootConfigure);
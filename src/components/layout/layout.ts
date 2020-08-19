import sglanchoneteApp from "../../app";

export const appRootConfigure = function () {
    return {
        template: require('./../../components/layout/layout.html'),
        controller: function ($scope) {
            $scope.loading = false;
            $scope.list = <Array<{ nome: string, apelido: string, ativo: string }>>[
                { ativo: 'active', nome: 'cliente', apelido: 'Cliente'},
                { ativo: '', nome: 'categoria', apelido: 'Categoria' },            
                { ativo: '', nome: 'produto', apelido: 'Produto' },           
                { ativo: '', nome: 'estoque', apelido: 'Estoque' },
                { ativo: '', nome: 'lanche', apelido: 'Lanche' },            
                { ativo: '', nome: 'combo', apelido: 'Combo' },            
                { ativo: '', nome: 'cardapio', apelido: 'Cardapio' },
                { ativo: '', nome: 'pedido', apelido: 'Pedido' },
                { ativo: '', nome: 'venda', apelido: 'Venda' },
            ];

            $scope.$on('loading', function(event: any, data: any) {
                $scope.loading = data;
            });

            $scope.$watch('loading', function () {
                console.log($scope.loading);
            }, true);

            $scope.viewSetActive = (rota: string) => {
                $scope.list.forEach((iterator: any ) => iterator.ativo = rota.includes(iterator.nome) ? 'active' : '');
            }

            $scope.viewSetActive(location.hash);
        }
    };
};

sglanchoneteApp.directive('approot', appRootConfigure);
import sglanchoneteApp from "../app";

export const appRootConfigure = function () {
    return {
        templateUrl: './views/layout/layout.html',
        controller: function ($scope) {
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
            ]

            $scope.viewSetActive = (rota: string) => {
                $scope.list.forEach(iterator => iterator.ativo = rota == iterator.nome ?'active' : '');
            }
        }
    };
};

sglanchoneteApp.directive('approot', appRootConfigure);
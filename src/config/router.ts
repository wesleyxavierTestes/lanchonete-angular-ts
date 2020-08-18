import sglanchoneteApp from "../app";

sglanchoneteApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: './../views/home.html'
        })

        .when("/cliente/list", {
            templateUrl: './../views/cliente/cliente.list.html'
        })
        .when("/cliente/cadastro", {
            templateUrl: './../views/cliente/cliente.cadastro.html'
        })

        .when("/categoria/list", {
            templateUrl: './../views/categoria/categoria.list.html'
        })
        .when("/categoria/cadastro", {
            templateUrl: './../views/categoria/categoria.cadastro.html'
        })

        .when("/produto/list", {
            templateUrl: './../views/produto/produto.list.html'
        })
        .when("/produto/cadastro", {
            templateUrl: './../views/produto/produto.cadastro.html'
        })

        .when("/cardapio/list", {
            templateUrl: './../views/cardapio/cardapio.list.html'
        })
        .when("/cardapio/cadastro", {
            templateUrl: './../views/cardapio/cardapio.cadastro.html'
        })

        .when("/combo/list", {
            templateUrl: './../views/combo/combo.list.html'
        })
        .when("/combo/cadastro", {
            templateUrl: './../views/combo/combo.cadastro.html'
        })

        .when("/estoque/list", {
            templateUrl: './../views/estoque/estoque.list.html'
        })
        .when("/estoque/cadastro", {
            templateUrl: './../views/estoque/estoque.cadastro.html'
        })

        .when("/lanche/list", {
            templateUrl: './../views/lanche/lanche.list.html'
        })
        .when("/lanche/cadastro", {
            templateUrl: './../views/lanche/lanche.cadastro.html'
        })

        .when("/pedido/list", {
            templateUrl: './../views/pedido/pedido.list.html'
        })
        .when("/pedido/cadastro", {
            templateUrl: './../views/pedido/pedido.cadastro.html'
        })

        .when("/venda/list", {
            templateUrl: './../views/venda/venda.list.html'
        })
        .when("/venda/cadastro", {
            templateUrl: './../views/venda/venda.cadastro.html'
        })
        .otherwise("/");
});
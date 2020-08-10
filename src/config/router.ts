import sglanchoneteApp from "../app";

sglanchoneteApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: './../views/home.html'
        })
        .when("/cliente/list", {
            templateUrl: './../views/cliente/cliente.list.html'
        })
        .when("/categoria/list", {
            templateUrl: './../views/categoria/categoria.list.html'
        })
        .when("/produto/list", {
            templateUrl: './../views/produto/produto.list.html'
        })
        .when("/cardapio/list", {
            templateUrl: './../views/cardapio/cardapio.list.html'
        })
        .when("/combo/list", {
            templateUrl: './../views/combo/combo.list.html'
        })
        .when("/estoque/list", {
            templateUrl: './../views/estoque/estoque.list.html'
        })
        .when("/lanche/list", {
            templateUrl: './../views/lanche/lanche.list.html'
        })
        .when("/pedido/list", {
            templateUrl: './../views/pedido/pedido.list.html'
        })
        .when("/venda/list", {
            templateUrl: './../views/venda/venda.list.html'
        })
        .otherwise("/");
});
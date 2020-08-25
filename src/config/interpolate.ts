import sglanchoneteApp from '../app';

sglanchoneteApp.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
})
    .directive('bindAngularScope', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                for (const k in scope) {
                    if (!element[0][k]) {
                        element[0][k] = scope[k];
                    }
                }

                element.bind('click', function () {
                });
            }
        }
    })
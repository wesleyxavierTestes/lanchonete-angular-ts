import sglanchoneteApp from "../app";

export const appRootConfigure = function () {
    return {
        templateUrl: './views/layout/layout.html'
    };
};

sglanchoneteApp.directive('approot', appRootConfigure);
import sglanchoneteApp from "../../app";

const appRootConfigure = function ($state) {
    return {
        template: require('./../../components/home/home.html'),
        controller: function ($scope) {

        }
    };
};

sglanchoneteApp.directive('homebase', appRootConfigure);
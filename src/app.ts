import angular from "angular";
import '@uirouter/angularjs';
import 'angular-animate';
import * as route from '@uirouter/angularjs'


const sglanchoneteApp = angular.module(
    'sglanchoneteApp', [route.default, 'ngAnimate']);

export default sglanchoneteApp;

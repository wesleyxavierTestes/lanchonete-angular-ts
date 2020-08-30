import angular from "angular";
import '@uirouter/angularjs';
import 'angular-animate';
import 'angular-sanitize';
import * as route from '@uirouter/angularjs'
import './style';

const sglanchoneteApp = angular.module(
    'sglanchoneteApp', [route.default, 'ngAnimate', 'ngSanitize' ]);

export default sglanchoneteApp;

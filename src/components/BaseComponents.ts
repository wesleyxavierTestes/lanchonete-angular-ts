import { IScope } from "angular";

export abstract class BaseComponents {
    constructor(protected $scope: IScope) { }

    $onInit() {

    }
}
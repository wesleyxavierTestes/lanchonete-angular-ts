import sglanchoneteApp from '../../app';
import { IScope } from 'angular';
import { CreateCustomUtils } from '../../utils/CreateCustomUtils';

interface IInputDate extends IScope {

    viewChange: (input: HTMLInputElement) => void;
    viewFormatDate: (v: Date | string) => Date;
    $ctrl: {
        model: Date;
        value: Date | string;
        customclass: string;
        outChange: (event: {}) => void;
    }
}
class InputDate {

    constructor(private $scope: IInputDate) {
        $scope.viewFormatDate = (v: Date | string) => {
            let now = new Date(v);
            var now_utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
            return new Date(now_utc);
        };
        $scope.viewChange = () => {
            let value = $scope.viewFormatDate($scope.$ctrl.value);

            $scope.$ctrl.outChange({ $event: value });
        };
    }

    $onInit() {
        this.$scope.$ctrl.value = this.$scope.viewFormatDate(this.$scope.$ctrl.value);
    }
}

sglanchoneteApp.component('inputDate', {
    template: require("./input-date.html"),
    controller: InputDate,
    bindings: {
        value: "<",
        customclass: "<",

        outChange: "&"
    }
});

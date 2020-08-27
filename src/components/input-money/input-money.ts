
import sglanchoneteApp from '../../app';
import { IScope } from 'angular';
import * as _ from 'lodash';

interface IInputMoney extends IScope {

    viewKeyPress: (input: HTMLInputElement) => void;

    viewFormatMaskMoney: (v: string) => void;

    $ctrl: {
        value: string;
        customclass: string;
        outChange: (event: {}) => void;
    }
}

class InputMoney {

    constructor($scope: IInputMoney) {
        $scope.viewKeyPress = (input: HTMLInputElement) => {
            $scope.$ctrl.value = input.value = this.viewFormatMaskMoney(input.value);
            $scope.$ctrl.value = $scope.$ctrl.value.replace(/\D/g, '');
            $scope.$ctrl.outChange({ $event: $scope.$ctrl.value});
        };
        $scope.viewFormatMaskMoney = this.viewFormatMaskMoney;
    }
    
    private viewFormatMaskMoney(v: string) {
        if (_.isEmpty(v)) return v;

        v = v.replace(/\D/g, '');

        v = parseFloat(v).toString();

        if (v.length > 14)
            v = v.substring(0, 13);

        if (v.length <= 1)
            v = v.replace(/(\d{1})$/, "0,0$1");
        else if (v.length <= 2)
            v = v.replace(/(\d{2})$/, "0,$1");
        else if (v.length <= 5)
            v = v.replace(/(\d{0,3})(\d{2})$/, "$1,$2");
        else if (v.length <= 8)
            v = v.replace(/(\d{0,3})(\d{3})(\d{2})$/, "$1.$2,$3");
        else if (v.length <= 11)
            v = v.replace(/(\d{0,3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3,$4");
        else if (v.length <= 14)
            v = v.replace(/(\d{0,3})(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3.$4,$5");

        return v.replace("$1", "");
    }
}

sglanchoneteApp.component('inputMoney', {
    template: require("./input-money.html"),
    controller: InputMoney,
    bindings: {
        value: "<",
        customclass: "<",

        outChange: '&'
    }

});
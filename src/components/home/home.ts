import sglanchoneteApp from "../../app";
import { IScope } from 'angular';

class HomeBase {
    
    constructor($scope: IScope, private $element: JQLite) {

    }

    $onInit() {
        let template: HTMLTemplateElement = (<any>this.$element)[0].firstElementChild as HTMLTemplateElement;

        setTimeout(() => {
            this.$element.append(template.content.firstElementChild);
        }, 2000);
    }
}

sglanchoneteApp.component('homebase', {
    template: require('./../../components/home/home.html'),
    controller: HomeBase
});
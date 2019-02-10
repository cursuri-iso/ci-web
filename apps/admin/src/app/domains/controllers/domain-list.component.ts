import { Component, Input } from '@angular/core';

import { DomainModel } from '../models';

@Component({
    selector: 'ci-domains',
    templateUrl: '../views/domain-list.component.html'
})
export class DomainListComponent {
    @Input() list: DomainModel[]

}
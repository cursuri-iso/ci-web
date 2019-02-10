import { DomainService } from './domain.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DomainModel } from '../models';

@Component({
    selector: 'ci-domain-list',
    templateUrl: '../views/domain-list.container.html',
})
export class DomainListContainerComponent implements OnInit {
    public domains$: Observable<DomainModel[]>;
    constructor(private domainService: DomainService) {}

    ngOnInit() {
        this.domains$ = this.domainService.getDomains();
    }
}
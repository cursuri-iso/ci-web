import { Injectable } from '@angular/core';
import { EntityService } from '@ci-web/core-lib';
import { Observable } from 'rxjs';

import { DomainModel } from '../models';

@Injectable()
export class DomainService {
    constructor(private service: EntityService) {}

    public getDomains(): Observable<DomainModel[]> {
        return this.service.getEntities() as Observable<DomainModel[]>;
    }
}
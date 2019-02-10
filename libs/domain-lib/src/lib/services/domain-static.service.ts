import { EntityService, EntityModel } from '@ci-web/core-lib';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class DomainStaticService implements EntityService {
    constructor(){}
    getEntities(): Observable<EntityModel[]>  {
        const domains: any[] = [];

        domains.push({ name: 'First domain', specific: 'Specific for the first domain' });
        domains.push({ name: 'Second domain', specific: 'Specific for the second domain' });

        return of(domains);
    }
}
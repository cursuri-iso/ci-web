import { EntityModel } from '../models/entity.model';
import { Observable, of } from 'rxjs';

export class EntityService  {
    getEntities(): Observable<EntityModel[]> { return of([]); }
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainService } from './controllers/domain.service';
import { DomainListContainerComponent } from './controllers/domain-list.container';
import { DomainListComponent } from './controllers/domain-list.component';

@NgModule({
  declarations: [
    DomainListComponent,
    DomainListContainerComponent,

  ],
  imports: [
    CommonModule
  ],
  providers: [
    DomainService
  ],
  exports: [
    DomainListContainerComponent,
  ]
})
export class DomainsModule { }

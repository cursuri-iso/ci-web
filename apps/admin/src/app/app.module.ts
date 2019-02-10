import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { CoreLibModule, EntityService } from '@ci-web/core-lib';
import { DomainLibModule, DomainStaticService } from '@ci-web/domain-lib';
import { NxModule } from '@nrwl/nx';

import { AppComponent } from './app.component';
import { DomainsModule } from './domains/domains.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    NxModule.forRoot(), 
    ClarityModule, 
    DomainLibModule,
    DomainsModule,
  ],
  providers: [
    { provide: EntityService, useClass: DomainStaticService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

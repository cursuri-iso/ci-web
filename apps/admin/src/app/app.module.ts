import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot(), ClarityModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainStaticService } from './services';

@NgModule({
  imports: [CommonModule],
  providers: [DomainStaticService],
})
export class DomainLibModule {}

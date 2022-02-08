import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingRoutingModule } from './routing.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [CommonModule, RoutingRoutingModule],
})
export class PagesModule {}

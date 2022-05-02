import {NgModule} from '@angular/core';
import {MainLayoutRoutingModule} from './main-layout.routing.module';
import {SharedModule} from '../shared-module/shared.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainPageComponent } from './components/main-page/main-page.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainLayoutRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    MainPageComponent
  ],
  providers: []
})

export class MainLayoutModule {}

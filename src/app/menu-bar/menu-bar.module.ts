import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuBarComponent } from './menu-bar.component';

@NgModule({
  declarations: [
    MenuBarComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [MenuBarComponent],
  providers: [],
})
export class MenuBarModule { }

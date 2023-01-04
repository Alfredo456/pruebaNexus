import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header";
import {DataUpdateComponent} from './data-update/data-update.component';
import {FooterComponent} from './footer/footer.component';
import {MenuComponent} from './menu/menu.component';
import {InformationComponent} from './information/information.component';
import {DataUpdateModalComponent} from './data-update-modal/data-update-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataUpdateComponent,
    FooterComponent,
    MenuComponent,
    InformationComponent,
    DataUpdateModalComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}

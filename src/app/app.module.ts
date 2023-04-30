import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TuiButtonModule, TuiFormatDatePipeModule, TuiFormatNumberPipeModule, TuiLinkModule, TuiRootModule, TuiTextfieldControllerModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import {TuiInputModule, TuiInputPasswordModule, TuiTagModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./components/login/login.component";
import {NotFoundComponent} from "./components/notFound/notFound.component";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {DevicesComponent} from "./components/devices/devices.component";
import {TuiTableModule} from "@taiga-ui/addon-table";
import {TuiForModule} from "@taiga-ui/cdk";
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru'

registerLocaleData(localeRu)

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TuiRootModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiInputPasswordModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    RouterOutlet,
    HttpClientModule,
    TuiTableModule,
    TuiFormatNumberPipeModule,
    TuiForModule,
    TuiTagModule,
    TuiLinkModule,
    TuiFormatDatePipeModule,
      TuiDialogModule,
      TuiAlertModule
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

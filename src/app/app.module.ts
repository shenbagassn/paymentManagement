import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddpaymentComponent } from './addpayment/addpayment.component';
import { ListpaymentComponent } from './listpayment/listpayment.component';
import { FilterPipe } from './filter.pipe';
import { CreditCardImagePipe } from './credit-card-image.pipe';
import { AsteriskPipe } from './asterisk.pipe';
import { AddhyphenDirective } from './addhyphen.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddpaymentComponent,
    ListpaymentComponent,
    FilterPipe,
    CreditCardImagePipe,
    AsteriskPipe,
    AddhyphenDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { DatePipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core'
import { DateAdapter } from '@angular/material/core';
import { MyDateAdapter } from './my-date-adapter';
import * as moment from "moment";
import { FinalComponent } from './final/final.component';

// import { MD_DATE_FORMATS } from '@angular/material';
registerLocaleData(localePt);

export const APP_DATE_FORMATS = {
  parse(value: any): Date | null {
    const date = moment(value, 'DD/MM/YYYY');
    return date.isValid() ? date.toDate() : null;
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'numeric' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    { provide: DateAdapter, useClass: MyDateAdapter },
    [DatePipe]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


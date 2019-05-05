import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RLoginComponent } from './forms/rlogin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './http/books.component';
import { CountriesComponent } from './http/countries.component';


@NgModule({
  declarations: [
      CountriesComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [CountriesComponent]
})
export class AppModule { }

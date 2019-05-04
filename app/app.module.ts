import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UseStackComponent } from './services/usestack.component';
import { StackService } from './services/stack.service';



@NgModule({
  declarations: [
     UseStackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [UseStackComponent]
})
export class AppModule { }

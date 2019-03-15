import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {test} from './test-component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { AwesomeComponentComponent } from './awesome-component/awesome-component.component';

@NgModule({
  declarations: [
    AppComponent, test, AwesomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

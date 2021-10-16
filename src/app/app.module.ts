import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../environments/environment';
import { counterReducer } from './store/reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counterReducer }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Basic Store App',
      logOnly: environment.production,
      maxAge: 25 //  Retains last 25 states
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

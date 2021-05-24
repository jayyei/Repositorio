import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponentComponent } from './odd-component/odd-component.component';
import { EvenComponentComponent } from './even-component/even-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponentComponent,
    EvenComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HammerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

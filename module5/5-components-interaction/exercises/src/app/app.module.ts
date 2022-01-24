import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownTimerGetSetComponent } from './countdown-timer-get-set/countdown-timer-get-set.component';
import { CountdownTimerOnchangesComponent } from './countdown-timer-onchanges/countdown-timer-onchanges.component';
import { CountdownTimerAliasComponent } from './countdown-timer-alias/countdown-timer-alias.component';
import { CountdownTimerEventComponent } from './countdown-timer-event/countdown-timer-event.component';
import { CountdownTimerEventAliasComponent } from './countdown-timer-event-alias/countdown-timer-event-alias.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { HackernewsComponent } from './hackernews/hackernews.component';
import { LikesComponent } from './hackernews/likes/likes.component';
import { NavbarComponent } from './hackernews/navbar/navbar.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    CountdownTimerGetSetComponent,
    CountdownTimerOnchangesComponent,
    CountdownTimerAliasComponent,
    CountdownTimerEventComponent,
    CountdownTimerEventAliasComponent,
    RatingBarComponent,
    HackernewsComponent,
    LikesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HackernewsPractiseComponent } from './hackernews-practise/hackernews-practise.component';
import {FormsModule} from "@angular/forms";
import { LikesComponent } from './hackernews-practise/likes/likes.component';
import { HackernewsExerciseComponent } from './hackernews-exercise/hackernews-exercise.component';
import { NavbarComponent } from './hackernews-exercise/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HackernewsPractiseComponent,
    LikesComponent,
    HackernewsExerciseComponent,
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

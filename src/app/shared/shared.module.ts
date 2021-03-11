import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from "@angular/router";
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {SearchComponent} from './components/search/search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FocusDirective} from "./directives/focus/focus.directive";
import {ActorCardComponent} from './components/actor-card/actor-card.component';
import {TrailerComponent} from './components/trailer/trailer.component';
import {SafePipe} from './pipes/safe/safe.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    MovieCardComponent,
    SearchComponent,
    FocusDirective,
    ActorCardComponent,
    TrailerComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    MovieCardComponent,
    SearchComponent,
    FocusDirective,
    ActorCardComponent,
    TrailerComponent,
    SafePipe
  ]
})
export class SharedModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from "@angular/router";
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {SearchComponent} from './components/search/search.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MovieCardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SearchComponent,
    HeaderComponent,
    MovieCardComponent
  ]
})
export class SharedModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StarRatingModule } from 'angular-star-rating';

import { LayoutModule } from './layout/layout.module';
import { ReviewModule } from './review/review.module';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    StarRatingModule.forRoot(),
    ReviewModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

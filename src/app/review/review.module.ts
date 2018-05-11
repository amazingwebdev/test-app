import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewComponent } from './review.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [ReviewComponent],
  exports: [
    ReviewComponent
  ]
})
export class ReviewModule { }

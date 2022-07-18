import { NgModule } from '@angular/core';
import { BookstoreComponent } from './bookstore.component';
import { PosterComponent } from './poster/poster.component';

@NgModule({
  declarations: [BookstoreComponent, PosterComponent],
  imports: [
  ],
  exports: [BookstoreComponent]
})
export class BookstoreModule { }

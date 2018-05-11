import { Component, OnInit } from '@angular/core';
import { Comment } from '../core/models/comment';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  books = [
    {media: 'http://heymarket.com/tmp/mentalist-3.png'},
    {media: 'http://heymarket.com/tmp/mentalist-4.png'},
    {media: 'http://heymarket.com/tmp/mentalist-5.png'},
    {media: 'http://heymarket.com/tmp/mentalist-6.png'},
    {media: 'http://heymarket.com/tmp/mentalist-7.png'},
    {media: 'http://heymarket.com/tmp/mentalist-7.png'},
    {media: 'http://heymarket.com/tmp/mentalist-7.png'},
    {media: 'http://heymarket.com/tmp/mentalist-7.png'},
    {media: 'http://heymarket.com/tmp/mentalist-7.png'},
    {media: 'http://heymarket.com/tmp/mentalist-7.png'},
    {media: 'http://heymarket.com/tmp/mentalist-7.png'},
    {media: 'http://heymarket.com/tmp/mentalist-7.png'},
    {media: 'http://heymarket.com/tmp/mentalist-7.png'},
    {media: 'http://heymarket.com/tmp/mentalist-7.png'},
    {media: 'http://heymarket.com/tmp/mentalist-7.png'},
    {media: 'http://heymarket.com/tmp/mentalist-7.png'},
    {media: 'http://heymarket.com/tmp/mentalist-7.png'},
    {media: 'http://heymarket.com/tmp/mentalist-7.png'},
  ];

  comments: Comment[] = [
    {
      id: 1,
      name: 'John Doy',
      comment: 'After I finished watching The Mentalist series finale, I then had to watch this great, old, scene so I could remember' +
      'what a wonderful show it once was.',
      avatar: 'http://heymarket.com/tmp/avatar1.png',
      added: '2016-08-02T23:32:55.747456Z'
    },
    {
      id: 2,
      name: 'Bob Kirchlen',
      comment: 'Thank you for uploading this! Great show!',
      avatar: 'http://heymarket.com/tmp/avatar2.png',
      added: '2016-08-04T20:32:55.747456Z'
    },
    {
      id: 3,
      name: 'Martin Cock',
      comment: 'There is this one scene on the mentalist that Patrick walked away from a tv show interview ' +
      'after the presenter broke her promise about complete control of the interview or something…anyone kn' +
      'ows which season and which episode it was?',
      avatar: 'http://heymarket.com/tmp/avatar3.png',
      added: '2016-08-03T13:32:55.747456Z'
    }
  ];

  comment = '';

  showComment = false;

  constructor() { }

  ngOnInit() {
  }

  addComment() {

  }

  onSubmit() {
    this.showComment = false;
    this.comments.push({
      name: 'James Sayer',
      comment: this.comment,
      avatar: 'http://heymarket.com/tmp/avatar3.png',
      added: new Date().toISOString()
    });
    this.comment = '';
  }

  selectBook(book) {
    if (book.active) {
      book.active = false;
    } else {
      this.books.map((x: any) => x.active = false);
      book.active = true;
    }
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Comment, CommentTypes } from '../../models/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input()
  public comment: Comment;

  constructor() { }

  ngOnInit() {
  }

  public get isLike(): boolean {
    return this.comment.type === CommentTypes.like;
  }

}

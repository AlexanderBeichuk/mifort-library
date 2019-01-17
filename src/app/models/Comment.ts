import {User} from './User';

export class Comment {
  constructor(
    public readonly id: string = null,
    public user: User = new User(),
    public text: string = null
  ) { }
}

export interface ResponseComment {
  id: string;
  user: User;
  text: string;
}

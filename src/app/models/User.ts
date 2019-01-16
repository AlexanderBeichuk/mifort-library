import {UserRole} from './config';

export class User {

  public readonly id: string;
  public email: string;
  public nickName: string;
  public avatar: string;
  public role: UserRole;

  constructor(
    id: string = null,
    email: string = null,
    nickName: string = null,
    avatar: string = null,
    role: UserRole | string = UserRole.user
  ) {
    this.id = id;
    this.email = email;
    this.nickName = nickName;
    this.avatar = avatar;
    this.role = UserRole[role] || UserRole.user;
  }
}

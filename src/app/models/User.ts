export enum UserRole {
  admin = 'admin',
  user = 'user'
}

export class User {

  public readonly id: string;
  public email: string;
  public nickName: string;
  public avatar: string;
  private _role: UserRole;

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
    this.role = role;
  }

  public get role(): UserRole | string {
    return this._role;
  }

  public set role(role: UserRole | string) {
    this._role = UserRole[role] || UserRole.user;
  }
}

export interface UserDTO {
  id: string;
  email: string;
  nickName: string;
  avatar?: string;
  role: string;
}

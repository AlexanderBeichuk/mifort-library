const DEFAULT_ROLE = 'user';

export class User {
  constructor(
    public readonly id: string = null,
    public email: string = null,
    public nickName: string = null,
    public avatar: string = null,
    public role: string = DEFAULT_ROLE
  ) { }
}

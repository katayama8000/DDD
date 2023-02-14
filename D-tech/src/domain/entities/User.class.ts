export class User {
  private constructor(
    private readonly _id: number,
    private _email: string,
    private _password: string,
    private _name: string,
    private _createdAt: Date,
    private _updatedAt: Date
  ) {}

  get id(): number {
    return this._id;
  }
  get email(): string {
    return this._email;
  }
  get password(): string {
    return this._password;
  }
  get name(): string {
    return this._name;
  }
  get createdAt(): Date {
    return this._createdAt;
  }
  get updatedAt(): Date {
    return this._updatedAt;
  }

  public static create(userInfo: {
    id: number;
    email: string;
    password: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }): User {
    return new User(
      userInfo.id,
      userInfo.email,
      userInfo.password,
      userInfo.name,
      userInfo.createdAt,
      userInfo.updatedAt
    );
  }
}

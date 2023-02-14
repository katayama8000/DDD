import { User } from "../entities/User.class";

export interface UserRepository {
  findUserById(id: number): Promise<User | undefined>;
  findUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: User): Promise<User>;
  updateUser(user: User): Promise<User>;
  deleteUser(id: string): Promise<void>;
}

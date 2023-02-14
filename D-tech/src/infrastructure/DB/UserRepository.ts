import { User } from "../../domain/entities/User.class";
import { UserRepository as UserRepositoryInterface } from "../../domain/repositories/UserRepository.interface";
export class UserRepository implements UserRepositoryInterface {
  findUserAll(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  findUserById(id: number): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }
  findUserByEmail(email: string): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }
  createUser(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  updateUser(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  deleteUser(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

import { User } from "../../domain/entities/User.class";
import { UserRepository as UserRepositoryInterface } from "../../domain/repositories/UserRepository.interface";

const dummyUser1 = {
  id: 1,
  name: "dummy",
  email: "test1@test.com",
  password: "password",
  createdAt: new Date(),
  updatedAt: new Date(),
}

const dummyUser2 = {
  id: 2,
  name: "dummy2",
  email: "test2@test.com",
  password: "password",
  createdAt: new Date(),
  updatedAt: new Date(),
}

const dummyUser = [dummyUser1, dummyUser2];
export class UserRepository implements UserRepositoryInterface {
  findUserAll(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      const users = dummyUser.map((user) => User.create(user));
      resolve(users);
    });
  }
  findUserById(id: number): Promise<User | undefined> {
    return new Promise((resolve, reject) => {
      const user = dummyUser.find((user) => user.id === id);
      if (user) {
        resolve(User.create(user));
      } else {
        resolve(undefined);
      }
    });
  }
  findUserByEmail(email: string): Promise<User | undefined> {
    return new Promise((resolve, reject) => {
      const user = dummyUser.find((user) => user.email === email);
      if (user) {
        resolve(User.create(user));
      } else {
        resolve(undefined);
      }
    });
  }
  
  createUser(user: User): Promise<User>{
    const newUser = {
      id: dummyUser.length + 1,
      name: user.name,
      email: user.email,
      password: user.password,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    dummyUser.push(newUser);
    return new Promise((resolve, reject) => {
      resolve(User.create(newUser));
    } 
    );
  }
  
  updateUser(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  deleteUser(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

}

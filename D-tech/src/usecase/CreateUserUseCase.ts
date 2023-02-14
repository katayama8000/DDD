import { inject, injectable } from "tsyringe";
import { User } from "../domain/entities/User.class";
import { UserRepository } from "../domain/repositories/UserRepository.interface";
import { UserDto } from './dto/User.dto';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository,
  ) {}

    async execute(userInfo: UserDto): Promise<UserDto> {
      const user = User.create(userInfo);
      return await this.userRepository.createUser(user);
  }
}
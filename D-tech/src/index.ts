import 'reflect-metadata'
import { container } from 'tsyringe'
import { UserRepository } from './infrastructure/DB/UserRepository'
import { CreateUserUseCase, FetchUserAllUseCase, UserDto } from './usecase/_index'

// DIコンテナ登録
export const setUpModule = () => {
    container.register('UserRepository', { useClass: UserRepository })
}

export const fetchUserAll = async () => {
    return await container.resolve(FetchUserAllUseCase).execute()
}

export const createUser = async (userInfo: UserDto) => {
    return await container.resolve(CreateUserUseCase).execute(userInfo)
}
import { IUserRepository } from '../../repositories/user.repository';

class GetUserUseCase {
  constructor(private usersRepository: IUserRepository){}

  async execute(id: string) {
    const user = await this.usersRepository.getUserById(id);

    return user;
  }
}

export { GetUserUseCase }

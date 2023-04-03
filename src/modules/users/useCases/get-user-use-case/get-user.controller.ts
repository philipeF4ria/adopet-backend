import { Request, Response } from 'express';
import { IUserRepository } from '../../repositories/user.repository';
import { GetUserUseCase } from './get-user.usecase';

class GetUserController {
  constructor(private usersRepository: IUserRepository) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getUserUseCase= new GetUserUseCase(this.usersRepository);

    const users = await getUserUseCase.execute(id);

    return response.json(users);
  }
}

export { GetUserController }

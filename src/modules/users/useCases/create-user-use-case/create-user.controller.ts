import { Request, Response } from 'express';

import { IUserRepository } from '../../repositories/user.repository';

import { CreateUserUseCase } from './create-user.usecase';

class CreateUserController {
  constructor(private userRepository: IUserRepository) {}

  async handle(request: Request, response: Response) {
    try {
      const data = request.body;

      const createUserUseCase = new CreateUserUseCase(this.userRepository);

      await createUserUseCase.execute(data);

      return response.sendStatus(200);

    } catch(err: any) {
      return response.json({
        error: err.message
      });
    }
  }
}

export { CreateUserController }

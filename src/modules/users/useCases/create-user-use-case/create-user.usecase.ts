import { IUserRepository } from '../../repositories/user.repository';

import { User } from '../../entities/user.entity';

type UserRequest = {
  name: string;
  email: string;
  password: string;
  confirmed_password: string;
}

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: UserRequest) {
    if (
      !data.name || 
      !data.email || 
      !data.password || 
      !data.confirmed_password) {
        throw new Error('Fields are required');
    }

    const emailExists = await this.userRepository.findByEmail(data.email);

    if (emailExists) {
      throw new Error('E-mail already exists');
    }

   const user = await User.create({
    name: data.name,
    email: data.email,
    password: data.password,
   });

   await this.userRepository.save(user);

   return;
  }
}

export { CreateUserUseCase }

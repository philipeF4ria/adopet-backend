import { CreateUserController } from './create-user.controller';

import { UserPrismaRepository } from '../../repositories/implementations/user.prisma.repository';

const userRepository = new UserPrismaRepository();

const createUserController = new CreateUserController(userRepository);

export { createUserController }

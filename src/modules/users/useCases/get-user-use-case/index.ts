import { UserPrismaRepository } from '../../repositories/implementations/user.prisma.repository';
import { GetUserController } from './get-user.controller';

const usersRepository = new UserPrismaRepository();

const getUserController = new GetUserController(usersRepository);

export { getUserController }

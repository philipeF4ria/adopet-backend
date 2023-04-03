import { prismaClient } from '../../../../infra/database/prisma.config';
import { User } from '../../entities/user.entity';
import { IUserRepository } from '../user.repository';

class UserPrismaRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prismaClient.user.findFirst({
      where: {
        email,
      }
    });

    return user;
  }
  async save(data: User): Promise<void> {
    await prismaClient.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      }
    });
  }

  async getUserById(id: string): Promise<User | null> {
    const user = await prismaClient.user.findFirst({
      where: {
        id,
      },
    });

    return user;
  }
}

export { UserPrismaRepository }

import { User } from '../entities/user.entity';

interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  save(data: User): Promise<void>;
  getUserById(id: string): Promise<User | null>;
}

export { IUserRepository }

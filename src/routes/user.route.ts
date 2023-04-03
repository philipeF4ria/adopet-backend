import { Router } from 'express';

import { createUserController } from '../modules/users/useCases/create-user-use-case';
import { getUserController } from '../modules/users/useCases/get-user-use-case';

const userRouter = Router();

userRouter.post('/', async (request, response) => {
  await createUserController.handle(request, response);  
});

userRouter.get('/:id', async (request, response) => {
  await getUserController.handle(request, response);
});

export { userRouter }

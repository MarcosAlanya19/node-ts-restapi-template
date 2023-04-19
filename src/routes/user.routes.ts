import { Router } from 'express';
import * as userCtrl from '../controllers/user.controllers';

export const router = Router();

router.get('/', userCtrl.usersGet);

router.put('/:id', userCtrl.usersPut);

router.post('/', userCtrl.usersPost);

router.delete('/', userCtrl.usersDelete);

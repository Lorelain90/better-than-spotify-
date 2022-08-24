import Router from 'express';
import refreshAccessTokenController from '../controller/refreshAccessTokenController';

const router = Router();

router.post('/refresh', refreshAccessTokenController.user)

export default router
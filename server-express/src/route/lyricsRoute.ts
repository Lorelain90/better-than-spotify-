import Router from 'express';
import lyricsController from '../controller/lyricsController';

const router = Router();

router.get('/lyrics', lyricsController.song)

export default router
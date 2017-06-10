import express from 'express';
import path from 'path';
import mainController from '../controllers/mainController';
const router = express.Router({strict: true});

router.get('/', mainController.root);
router.get('/version', mainController.version);

export default router;

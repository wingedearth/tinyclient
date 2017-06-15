import express from 'express';
import root from '../controllers/root';
import version from '../controllers/version';
const router = express.Router({strict: true});

router.get('/', root);
router.get('/version', version);

export default router;

import { Router } from 'express'
import { secretInfo } from '../controllers/privateController.js';
import checkAuth from '../middleware/checkAuth.js';

const router = Router()

router.get('/', checkAuth,secretInfo)

export default router;
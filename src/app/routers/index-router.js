import { Router } from 'express';
import contactsRouter from './contacts-router.js';
import categoryRouter from './category-routes.js';

const router = Router();

router.use('/contacts', contactsRouter);
router.use('/categories', categoryRouter);

export default router;

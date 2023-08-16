import { Router } from 'express';
import ContactController from '../controllers/category-controller.js';

const categoryRouter = Router();

categoryRouter.get('/', ContactController.index);
categoryRouter.post('/', ContactController.store)

export default categoryRouter;
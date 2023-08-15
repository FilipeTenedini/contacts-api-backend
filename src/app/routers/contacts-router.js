import { Router } from 'express';
import ContactController from '../controllers/contacts-controller.js';

const contactsRouter = Router();

contactsRouter.get('/', ContactController.index);
contactsRouter.get('/:id', ContactController.show);
contactsRouter.post('/', ContactController.store);
contactsRouter.delete('/:id', ContactController.delete);
contactsRouter.put('/:id', ContactController.update);

export default contactsRouter;

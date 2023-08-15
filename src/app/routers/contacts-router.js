import { Router } from 'express';
import contact from '../controllers/contacts-controller';

const contactsRouter = Router();

contactsRouter.get('/', contact.index);
contactsRouter.get('/:id', contact.show);
contactsRouter.post('', contact.store);
contactsRouter.delete('/:id', contact.delete);
contactsRouter.put('/:id', contact.update);

export default contactsRouter;

import ContactsRepository from '../repositories/contacts-repository.js';

class ContactController {
  async index(req, res) {
    // listar todos registro
    const contacts = await ContactsRepository.findAll();

    res.send(contacts);
  }

  async show(req, res) {
    const { id } = req.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404 = not found;
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(contact);
  }

  async store(req, res) {
    const {
      name, email, phone, category_id,
    } = req.body;

    if (!name) return res.status(400).json({ error: 'Name is required' });
    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) return res.status(400).json({ error: 'This e-mail is already in use' });

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });

    res.status(200).json(contact);
  }

  async delete(req, res) {
    const { id } = req.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) return res.status(404).json({ error: 'User not found' });

    await ContactsRepository.delete(id);

    res.sendStatus(204);
  }
}

export default new ContactController();

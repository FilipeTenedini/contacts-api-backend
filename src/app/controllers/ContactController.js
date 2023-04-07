// regras de negócio;
const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // listar todos registro
    const contacts = await ContactsRepository.findAll();

    response.send(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404 = not found;
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({ error: 'This e-mail is already been taken' });
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });

    response.status(200).json(contact);
  }

  async update(request, response) {
    // editar um registro
  }

  async delete(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404 = not found;
      return response.status(404).json({ error: 'User not found' });
    }

    await ContactsRepository.delete(id);

    // No Content (deu certo mas não tem volta para o usuário. Não tem conteúdo, não tem corpo);
    // No caso do delete deu certo não tem o pq retornar nada para o usuário, não tem o que mandar.
    response.sendStatus(204);
  }
}

module.exports = new ContactController();

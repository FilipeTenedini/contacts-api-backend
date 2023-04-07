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

  store() {
    // criar um novo registro

  }

  update() {
    // editar um registro
  }

  delete() {
    // deletar um registro
  }
}

module.exports = new ContactController();

const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Filipe',
    email: 'filipetasurfando@hotmail.com',
    phone: '33214465',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'MEl',
    email: 'meltasurfando@hotmail.com',
    phone: '30183265',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }
}

module.exports = new ContactsRepository();

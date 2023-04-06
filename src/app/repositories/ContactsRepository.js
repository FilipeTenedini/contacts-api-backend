const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Filipe',
    email: 'filipetasurfando@hotmail.com',
    phone: '33214465',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();

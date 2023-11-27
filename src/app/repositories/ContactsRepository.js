const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Max Wesley',
    email: 'maxwesleydev@gmail.com',
    phone: '12121212',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();

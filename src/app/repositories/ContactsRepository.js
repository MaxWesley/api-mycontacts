const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Max Wesley',
    email: 'maxwesleydev@gmail.com',
    phone: '12121212',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'José Antonio',
    email: 'jose.antonio@gmail.com',
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

  findById(id) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.id === id),
      );
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);

      resolve();
    });
  }
}

module.exports = new ContactsRepository();

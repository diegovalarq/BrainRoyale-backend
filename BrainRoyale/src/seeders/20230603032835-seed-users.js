module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [
    {
      username:'funksoda',
      password:'diego',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username:'juanini',
      password:'chocolate',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username:'hernanc',
      password:'manjar',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username:'antonioossa',
      password:'nini',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username:'valeriasalas',
      password:'gato',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkInsert('Users', null, {}),
};
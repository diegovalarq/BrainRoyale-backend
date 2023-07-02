module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Categories', [
    {
      name: 'ciencia',
      color: 'verde',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'deporte',
      color: 'naranjo',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'arte',
      color: 'morado',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'historia',
      color: 'azul',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'matematica',
      color: 'rosado',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkInsert('Categories', null, {}),
};
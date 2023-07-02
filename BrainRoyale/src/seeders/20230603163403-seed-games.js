module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Games', [
    {
      round: 20,
      finished: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      round: 53,
      finished: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkInsert('Games', null, {}),
};
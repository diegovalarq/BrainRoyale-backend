module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Players', [
    {
      user_id: 1,
      category_id: 3,
      game_id: 1,
      position: 0,
      turn: 0,
      brain: 0,
      skip: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      category_id: 3,
      game_id: 1,
      position: 0,
      turn: 0,
      brain: 0,
      skip: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 3,
      category_id: 1,
      game_id: 1,
      position: 0,
      turn: 1,
      brain: 0,
      skip: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 4,
      category_id: 4,
      game_id: 1,
      position: 0,
      turn: 0,
      brain: 0,
      skip: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkInsert('Players', null, {}),
};
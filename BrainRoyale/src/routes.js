const Router = require('@koa/router');
const users = require('./routes/users.js')
const cards = require('./routes/cards.js')
const games = require('./routes/games.js')
const players = require('./routes/players.js')
const categories = require('./routes/categories.js')

const router = new Router();

router.use('/users', users.routes());
router.use('/cards', cards.routes());
router.use('/games', games.routes());
router.use('/players', players.routes());
router.use('/categories', categories.routes());

module.exports = router;

const Router = require('@koa/router');

const router = new Router();

// GET Game: with finished = 0

router.get("game.show", "/", async (ctx) => {
    try {
      const game = await ctx.orm.Game.findOne({ where: { finished: 0 } });
        ctx.body = game;
        ctx.status = 200;
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

// PUT Game: with id change round += 1

router.put("game.update", "/:id", async (ctx) => {
    try {
        const game = await ctx.orm.Game.findOne({where:{id:ctx.params.id}}); 
        game.round += 1;
        await game.save();
        ctx.body = game;
        ctx.status = 201;

    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }
  });

module.exports = router;
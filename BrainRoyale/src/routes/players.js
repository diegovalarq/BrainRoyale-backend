const Router = require('@koa/router');

const router = new Router();

// GET Player: with game_id = game_id and turn = 1

router.get("player.show", "/:game_id", async (ctx) => {
  try {
      const player = await ctx.orm.Player.findOne({
      where: {
          game_id: ctx.params.game_id,
          turn: 1
      }});
      ctx.body = player;
      ctx.status = 200;

  } catch (error) {
      ctx.body = error;        
      ctx.status = 400;
  }
});

// PUT Player: with id change position and turn

router.put("player.update", "/:id", async (ctx) => {
    try {
      const player = await ctx.orm.Player.findOne({ where: { id: ctx.params.id } });
  
      const { position, turn } = ctx.request.body;
      if (position !== null) {
        player.position = position;
      }
      player.turn = turn;
      await player.save();
  
      ctx.body = player;
      ctx.status = 200;
    } catch (error) {
      ctx.body = error;
      ctx.status = 400;
    }
  });
 
module.exports = router;
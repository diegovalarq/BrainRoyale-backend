const Router = require('@koa/router');

const router = new Router();

// GET Card: with category and used

router.get("card.show", "/:category_id", async (ctx) => {
    try {
        const card = await ctx.orm.Card.findOne({
        where: {
            category_id: ctx.params.category_id,
            used: 0
        }});
        ctx.body = card;
        ctx.status = 200;

    } catch (error) {
        ctx.body = error;        
        ctx.status = 400;
    }
});

// PUT Card: with id change used = 1

router.put("card.update", "/:id", async (ctx) => {
    try {
        const card = await ctx.orm.Card.findOne({where:{id:ctx.params.id}}); 
        card.used = 1;
        await card.save();
        ctx.body = card;
        ctx.status = 201;

    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }
  });

module.exports = router;
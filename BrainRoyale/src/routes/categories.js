const Router = require('@koa/router');

const router = new Router();

router.get("categories.list", "/", async(ctx)=>{
    try{
        const categories = await ctx.orm.Category.findAll();
        ctx.body = categories;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

module.exports = router;
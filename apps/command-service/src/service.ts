import Koa from 'koa';

const app = (module.exports = new Koa());

app.use(async function (ctx) {
  ctx.body = 'hello';
});

if (!module.parent) app.listen(3000);

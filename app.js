var koa = require('koa');
var app = koa();
var router = require('./routes');

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.EVENT_API_PORT);

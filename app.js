var koa = require('koa');
var app = koa();
var controller = require('koa-controller');

app.use(controller.router());

app.listen(process.env.EVENT_API_PORT);

var koa = require('koa');
var app = koa();
var routes = require('./routes')(app);

app.listen(process.env.EVENT_API_PORT);

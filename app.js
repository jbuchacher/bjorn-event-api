var koa = require('koa');
var app = koa();

var models = require('./models');

app.use(function *(){
   models.Sensor.findAll().then(function(sensors) {
       this.body = sensors;
       });
});

app.listen(process.env.EVENT_API_PORT);

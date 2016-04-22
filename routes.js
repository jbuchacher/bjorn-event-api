var Router = require('koa-router');
var sensors = new Router({
    prefix: '/sensors'
});

var models = require('./models');

function routes(app) {
    sensors.get('/', function* () {
        models.Sensor.findAll().then(function(sensors) {
            this.body = sensors;
        });
    });

    sensors.post('/', function* () {
        yield models.Sensor.create({
            name: 'sensorName'
        }).then((newSensor) => {
            this.body = newSensor;
        }).catch((error) => {
            this.body = error;
        });
    });

    app
        .use(sensors.routes())
        .use(sensors.allowedMethods());
};

module.exports = routes;

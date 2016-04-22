var router = require('koa-router');
var models = require('./models');

var sensors = router({
    prefix: '/sensors'
});

sensors.get('/', function* () {
    models.Sensor.findAll().then(function(sensors) {
        this.body = sensors;
    });
});

sensors.post('/', function* () {

});

const allRoutes = router();
allRoutes.use('/', sensors.routes());

module.exports = allRoutes;

var router = require('koa-router')();
var models = require('./models');

router.get('/', function* () {
    models.Sensor.findAll().then(function(sensors) {
        this.body = sensors;
    });
});

module.exports = router;

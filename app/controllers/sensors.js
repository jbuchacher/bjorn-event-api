var models = require('../../models');

module.exports = {
    find: function*() {
        yield models.Sensor.findAll().then((sensors) => {
            this.body = sensors;
        });
    },

    create: function*() {
        yield models.Sensor.create({
            name: 'sensorName'
        }).then((newSensor) => {
            this.body = newSensor;
        }).catch((error) => {
            this.body = error;
        });
    },

    update: function*(id) {
    }
};

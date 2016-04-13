var koa = require('koa');
var Sequelize = require('sequelize');
var app = koa();
var sequelize = new Sequelize(process.env.POSTGRES_DATABASE_NAME,
                              process.env.POSTGRES_USER,
                              process.env.POSTGRES_PASSWORD, {
                                  host: process.env.POSTGRES_HOST,
                                  dialect: 'postgres',
                                  pool: {
                                      max: 5,
                                      min: 0,
                                      idle: 10000
                                  }});

var User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

User.sync({force: true}).then(function () {
    // Table created
    console.log("Table created");
    return User.create({
        firstName: 'John',
        lastName: 'Hancock'
    });
});

app.use(function *(){
    this.body = 'Hello World';
});

app.listen(process.env.EVENT_API_PORT);

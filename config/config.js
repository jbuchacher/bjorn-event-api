module.exports = {
    "development": {
        "username": process.env.POSTGRES_USER,
        "password": process.env.POSTGRES_PASSWORD,
        "database": process.env.POSTGRES_DATABASE_NAME,
        "host": process.env.POSTGRES_HOST,
        "dialect": "postgres"
    },
    "test": {
        "username": process.env.POSTGRES_USER,
        "password": process.env.POSTGRES_PASSWORD,
        "database": process.env.POSTGRES_DATABASE_NAME,
        "host": process.env.POSTGRES_HOST,
        "dialect": "postgres"
    },
    "production": {
        "username": process.env.POSTGRES_USER,
        "password": process.env.POSTGRES_PASSWORD,
        "database": process.env.POSTGRES_DATABASE_NAME,
        "host": process.env.POSTGRES_HOST,
        "dialect": "postgres"
    }
}

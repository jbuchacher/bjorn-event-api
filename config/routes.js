module.exports = {
    '/sensors/:id?': { to: 'sensors#find' },
    'post /sensors': { to: 'sensors#create' },
    'put|post /sensors/:id': { to: 'sensors#update' },
};

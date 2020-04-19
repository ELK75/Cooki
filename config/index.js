let keys = require('../private/keys').default;
let dbPassword = keys.db;

const dev = process.env.NODE_ENV !== 'production';
let server = dev ? 'http://localhost:3000' : 'https://cooki.now.sh';
let dbUrl = dev ? 'mongodb://localhost:27017' : `mongodb+srv://elk75:${dbPassword}@cluster0-iucq6.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = { server, dbUrl };
const dev = process.env.NODE_ENV !== 'production';
let server = dev ? 'http://localhost:3000' : 'https://cooki.now.sh';
let dbUrl = dev ? 'mongodb://localhost:27017' : '';

module.exports = { server, dbUrl };
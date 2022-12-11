const handler = require('serverless-express/handler')
const app = require('./app.js')

module.exports.api = handler(app)
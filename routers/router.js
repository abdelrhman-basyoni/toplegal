const express = require('serverless-express/express')
const router = express.Router();
const contractsRouter = require('./contracts.router')


router.use('/contracts', contractsRouter);



module.exports = router;
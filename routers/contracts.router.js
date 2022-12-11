
const express = require('serverless-express/express')
const router = express.Router();
const requiredFields = require('../middlewares/requiredFields')
const contractsController = require('../controllers/contracts.controller')
router.get('/hello-world', function (req, res, next) {
    res.send("hello")


})


const createContractsFields = {
    'templateID': 'string',
    'contractName': 'string',
    'userId': 'string'
}
router.post('/create-contract', requiredFields(createContractsFields), contractsController.createContracts);
router.get('/getContractids', contractsController.getAllContracts);
router.get('/getContract/:id', contractsController.getContract);
module.exports = router
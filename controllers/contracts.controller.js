const Crypto = require('crypto')
const aws = require('../config/db')
const dynamoDbClient = aws.dynamoDbClient
exports.createContracts = async function (req, res, next) {

    try {
        const { userId, contractName, templateID } = req.body;

        id = Crypto.randomUUID()
        const params = {
            TableName: 'contracts',
            Item:
            {
                userId: userId,
                contractName: contractName,
                contractID: id,
                templateID: templateID
            }
        };
        const dynamores = await dynamoDbClient.put(params).promise();

        return res.send({
            success: true,
            message: 'contract created successfully',
            data: {
                contractID: id
            }
        });
    } catch (error) {
        return next(error)
    }
}


exports.getAllContracts = async function (req, res, next) {
    try {
        const params = {
            TableName: 'contracts',
            Select: "SPECIFIC_ATTRIBUTES",
            AttributesToGet: [
                'contractID'
            ]
        };
        const contracts = await dynamoDbClient.scan(params).promise();
        return res.send({
            success: true,
            message: 'contract created successfully',
            data: {
                contracts: contracts.Items
            }
        });
    } catch (error) {
        return next(error)
    }
}

exports.getContract = async function (req, res, next) {
    try {
        throw new Error('test error')
        const params = {
            TableName: 'contracts',
            Key: {
                contractID: req.params.id,
            },
        }
        const contract = await dynamoDbClient.get(params).promise();

        if(Object.keys(contract).length === 0 ){
            return res.send({ 
                success: false,
                message: 'contract not found',
            })
        }
        return res.send({
            success: true,
            message: 'contract created successfully',
            data: {
                contract:contract.Item
            }
        });
    } catch (error) {
        return next(error)
    }
}
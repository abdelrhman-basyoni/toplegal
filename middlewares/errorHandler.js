

const ErrorResponse = require('./errorResponse')

const logger = require('../config/logger')




const errorHandler = (error, request, response, next) => {


    logger.error('an error has occured',error)


    response.status(error.statusCode || 500).json({
        success: false,
        message: error.message || 'server error'
    });
};

module.exports = errorHandler, ErrorResponse;
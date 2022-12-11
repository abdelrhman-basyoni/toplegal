const ErrorResponse = require('../middlewares/errorResponse')

module.exports =  function requiredFields(fields) {
    //check if an array of fields is existing in the request or not
    return function (request, response, next) {
        for ( const key in fields ) {

            if (!request.body[`${key}`]) {

                return next(new ErrorResponse(`missing field ${key}`));

            }
            if(typeof request.body[`${key}`] !== fields[key]){
                return next(new ErrorResponse(`invalid datatype for field ${key}`));
            }
        }


        next()
    }





}
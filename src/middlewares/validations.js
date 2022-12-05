const { validationResult, check } = require('express-validator');

const eachFieldValidation = ( req, res, next ) => {

    const errors = validationResult( req );
    if( !errors.isEmpty() ) {
        return res.status(400).json(errors);
    }
    next();
}

const createTask = [
    check('Titulo')
    .isLength({ min: 2, max: 25 }),
    check('Descripcion')
    .isLength({ min: 5, max: 50 }),
    (req, res, next) => {
        eachFieldValidation(req, res, next);
    }
];

const updateTask = [
    check('EstatusComplecion')
    .not().isEmpty(),
    (req, res, next) => {
        eachFieldValidation(req, res, next);
    }
]

module.exports = {
    createTask,
    updateTask
}
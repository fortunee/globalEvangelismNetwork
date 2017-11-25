import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

function validateData(data) {
    let errors = {};

    if(Validator.isEmpty(data.name)) {
        errors.name = 'Name is required';
    }

    if(Validator.isEmpty(data.username)) {
        errors.username = 'Username is required';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    if(Validator.isEmpty(data.confirmPassword)) {
        errors.confirmPassword = 'Confirm password is required';
    }

    if(!Validator.equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = 'Passwords does not match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}

router.post('/', (req, res) => {
    const { errors, isValid } = validateData(req.body);

    if(!isValid) {
        res.status(400).json(errors);
    }
});

export default router;
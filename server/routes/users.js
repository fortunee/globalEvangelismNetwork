import express from 'express';
import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';
import commonValidations from './../validations/signup.validator';

import User from './../models/user';

let router = express.Router();

function validateData(data, otherValidations) {
    let { errors } = otherValidations(data);

    return User.query({
        where: { email: data.email },
        orWhere: { username: data.username }
    }).fetch().then(user => {
        if (user) {
            if(user.get('username') === data.username) {
                errors.username = 'Username already exists';
            }
            if (user.get('email') === data.email) {
                errors.email = 'Email already exists';
            }
        }
        return {
            errors,
            isValid: isEmpty(errors)
        };
    });

    // return Promise.all([
    //     User.where({ email: data.email }).fetch().then(user => {
    //         if (user) { errors.email = 'Email already exists'; }
    //     }),
    
    //     User.where({ username: data.username }).fetch().then(user => {
    //         if (user) { errors.username = 'Username already exists'; }
    //     })
    // ]).then(() => {
    //    return {
    //        errors,
    //        isValid: isEmpty(errors)
    //    };
    // });
}

router.post('/', (req, res) => {
    validateData(req.body, commonValidations).then(({ errors, isValid }) => {
        if(isValid) {
            const { name, username, email, password }  = req.body;
            const password_digest = bcrypt.hashSync(password, 10);
    
            User.forge({
                name, username, email, password_digest
            }, { hasTimestamps: true }).save()
                .then(user => res.status(200).json({ success: true }))
                .catch(err => res.status(500).json({ error: err }));
        } else {
            res.status(400).json(errors);
        }
    });
});

router.get('/:identifier', (req, res) => {
    User.query({
        where: { username: req.params.identifier },
        orWhere: { email: req.params.identifier }
    }).fetch().then(user => {
        res.status(200).json({ user });
    });
});

export default router;

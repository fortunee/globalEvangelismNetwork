import express from 'express';
import bcrypt from 'bcrypt';
import validateData from './../validations/signup.validator';

import User from './../models/user';

let router = express.Router();

router.post('/', (req, res) => {
    const { errors, isValid } = validateData(req.body);

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

export default router;

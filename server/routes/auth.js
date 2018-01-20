import express from 'express';
import bcrypt from 'bcrypt';

import User from './../models/user';


let router = express.Router();

router.post('/', (req, res) => {
    const { identifier, password } = req.body;
    User.query({
        where: { email: identifier },
        orWhere: { username: identifier }
    }).fetch().then((user) => {
        if (user) {
            if (bcrypt.compareSync(password, user.get('password_digest'))) {
                
            } else {
                res.status(401).json({ errors: { form: 'Incorrect username or password'}});
            }
        } else {
            res.status(401).json({ errors: { form: 'Incorrect username or password'}});
        }
    });
});

export default router;

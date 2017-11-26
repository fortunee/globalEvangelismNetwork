import express from 'express';
import validateData from './../validations/signup.validator';

let router = express.Router();

router.post('/', (req, res) => {
    const { errors, isValid } = validateData(req.body);

    if(!isValid) {
        res.status(400).json(errors);
    }
});

export default router;
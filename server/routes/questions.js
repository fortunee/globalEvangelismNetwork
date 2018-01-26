import express from 'express';

import Question from './../models/question';
import validateQuestion from './../validations/question.validator';
import authenticate from './../middlewares/authenticate';

let router = express.Router();

router.get('/', authenticate, (req, res) => {
    Question.query({}).fetch().then(questions => {
        res.status(200).json({ questions });
    });
});

router.post('/',authenticate, (req, res) => {
    let { errors, isValid } = validateQuestion(req.body);

    if (isValid) {
       return Question.forge(
            { title: req.body.title },
            { hasTimestamps: true }).save()
                .then(question => res.status(201).json({ success: true }))
                .catch(err => res.status(500).json({ error: err }));
    } else {
        return res.status(400).send({errors});
    }
});

export default router;

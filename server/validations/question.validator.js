import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const validateQuestion = (question) => {
    let errors = {};

    if (Validator.isEmpty(question.title)) {
        errors.title = 'You need to ask a question';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

export default validateQuestion;

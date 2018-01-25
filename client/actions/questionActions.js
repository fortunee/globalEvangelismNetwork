import { ASK_QUESTION } from './types';

export const askQuestion = (question) => {
    return {
        type: ASK_QUESTION,
        question
    };
};

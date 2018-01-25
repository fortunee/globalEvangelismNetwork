import { ASK_QUESTION } from './types';

export const askQuestion = (state) => {
    return {
        type: ASK_QUESTION,
        state
    };
};

import { ASK_QUESTION } from "../actions/types";


export default (state = [], action = {} ) => {
    switch(action.type) {
        case ASK_QUESTION:
            return [
                ...state,
                {
                    question: action.question
                }
            ];
    }
};

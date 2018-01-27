import { GET_QUESTIONS } from "../actions/types";

export default (state = [], action = {} ) => {
    switch(action.type) {
        case GET_QUESTIONS:
            const {questions} = action.state;
            return questions;
        default:
            return state;
    }
};

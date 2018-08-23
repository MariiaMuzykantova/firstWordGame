import { 
    COURSE_UPDATE, 
    WORD_CREATE,
    WORD_SAVE_SUCCESS
 } from '../actions/types';

const INITIAL_STATE = {
    englishWord: '',
    finnishWord: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COURSE_UPDATE:
            //const newState = {};
            //newState[action.payload.prop] = action.payload.value
            return { ...state, [action.payload.prop]: action.payload.value};
        case WORD_CREATE:
            return INITIAL_STATE;
        case WORD_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
}
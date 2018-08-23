export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
        //return whatever it returned the last time
            return state;
    }
};
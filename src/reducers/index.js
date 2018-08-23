import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CourseFormReducer from './CourseFormReducer';
import WordReducer from './WordReducer';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    auth: AuthReducer,
    courseForm: CourseFormReducer,
    words: WordReducer,
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});
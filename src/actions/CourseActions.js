import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    COURSE_UPDATE, 
    WORD_CREATE,
    WORDS_FETCH_SUCCESS,
    WORD_SAVE_SUCCESS
} from './types';

export const courseUpdate = ({ prop, value }) => {
    return {
        type: COURSE_UPDATE,
        payload: { prop, value}
    };
};

export const wordCreate = ({ englishWord, finnishWord }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/words`)
        .push({ englishWord, finnishWord })
        .then(() => {
            dispatch({ type: WORD_CREATE })
            Actions.wordcreate({ type: 'reset'});
        })
    }
}

export const wordsFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/words`)
        //any time we get any value, any data, call this function right here, this federal 
        //function with an object to describe the data's sitting in there
        //snapshot is an object that describe the data that we could get access to
        .on('value', snapshot => {
            dispatch({ type: WORDS_FETCH_SUCCESS, payload: snapshot.val() })
        })
    }
}

export const courseSave = ({ englishWord, finnishWord, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/words/${uid}`)
        .set({englishWord, finnishWord})
        .then(() => {
            dispatch({ type: WORD_SAVE_SUCCESS })
            Actions.courses()
        })
};
}

export const wordDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
  
    return () => {
      firebase.database().ref(`/users/${currentUser.uid}/words/${uid}`)
        .remove()
        .then(() => {
          Actions.courses({ type: 'replace' });
        });
    };
  };

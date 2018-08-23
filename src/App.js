import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';


class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAaEr5ud-HoL5310rKjN-hvzw7HbHbgX8k',
            authDomain: 'manager-6ef67.firebaseapp.com',
            databaseURL: 'https://manager-6ef67.firebaseio.com',
            projectId: 'manager-6ef67',
            storageBucket: 'manager-6ef67.appspot.com',
            messagingSenderId: '31965988926'
          };
          firebase.initializeApp(config);
    };

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App;
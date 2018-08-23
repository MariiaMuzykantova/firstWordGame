import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'native-base';
import { Confirm } from './common';

class Menu extends Component {
    state = { showModal: false };

    onAccept() {
        Actions.auth();
        this.setState({ showModal: false });
      }
    
      onDecline() {
        this.setState({ showModal: false });
      }

      render () {

    return (
        <View>
            <Button block primary style={styles.buttonStyle}>
            <Text style={styles.textStyle} onPress={() => Actions.courses()}> 
                Dictionary
            </Text>
            </Button>

            <Button block success style={styles.buttonStyle}>
            <Text style={styles.textStyle} onPress={() => Actions.wordcreate()}> 
                Add new definition
            </Text>
            </Button>

            <Button block primary style={styles.buttonStyle}>
            <Text style={styles.textStyle} onPress={() => Actions.verbslist()}> 
                6 Verbs groups
            </Text>
            </Button>

            <Button block warning style={styles.buttonStyle}>
            <Text style={styles.textStyle} onPress={() => Actions.contactus()}> 
                Give us feedback
            </Text>
            </Button>
            <Button 
                block danger 
                style={styles.buttonStyle}
                onPress={() => this.setState({ showModal: !this.state.showModal })}
            >
            <Text style={styles.textStyle}>
                Log out
            </Text>
            </Button>
            <Confirm 
                visible={this.state.showModal}
                 onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to LOG OUT?
            </Confirm>
        </View>
    )
}
}
const styles = {
    textStyle: {
        color: '#fff', 
        fontSize: 19, 
        fontWeight: '600' 
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        marginTop: 30,
        marginBottom: 10,
        paddingTop: 20,
        paddingBottom: 20,
        borderWidth: 1,
        marginRight: 5,
        marginLeft: 5
    }
};

export default Menu;
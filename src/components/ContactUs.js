import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { courseUpdate } from '../actions';
import {  Button } from './common';
import { Icon, Card, CardItem, Container } from 'native-base';

class ContactUs extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''}
    }
    // onTextPress = () => {
    //     const phone = "04453315403"

    //     Communications.text(phone, 'message')
    // }

    onTextPress = () => {
        const mail = "muzykantovamariia@hotmail.com"
        const { text } = this.state

        Communications.email([mail], null, null, null, text)
    }

    render() {
        return (
            <Container >
                <Card cardBorderRadius={5}>
                    <CardItem>
                        <ScrollView>
                            <TextInput 
                                multiline={true}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                            />
                        </ScrollView>
                    </CardItem>

                    <CardItem >
                        <Button block info onPress={this.onTextPress.bind(this)}>
                            <Text > 
                                Give feedback
                            </Text>
                        </Button>
                    </CardItem >
                </Card>
            </Container >
        )
    }
}

export default ContactUs;
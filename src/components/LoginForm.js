import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container } from 'native-base';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
          return <Spinner size="large" />;
        }
    
        return (
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        );
    }

    renderError() {
        if(this.props.error) {
            return (
                //alert('Authentication failed. Please try again!')
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    render() {
        return (
            <Container 
                style={{flex:1,
                justifyContent:'center'}}
            >
                <Card cardBorderRadius={25}>
                    <CardSection>
                        <Input 
                            label='Email:'
                            placeholder='example@mail.com'
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                    </CardSection>
                        
                    <CardSection>
                        <Input
                            secureTextEntry
                            label='Password'
                            placeholder='password'
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />
                    </CardSection>

                    {this.renderError()}
                    
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </Container>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading }
};

export default connect(mapStateToProps, {
    emailChanged, 
    passwordChanged, 
    loginUser 
})(LoginForm);
import _ from 'lodash';
import { courseUpdate, courseSave, wordDelete } from '../actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Card, CardSection, Button, Confirm } from './common';
import CourseForm from './CourseForm';
import { Actions } from 'react-native-router-flux';


class WordEdit extends Component {
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.words, (value, prop) => { 
            this.props.courseUpdate({ prop, value });
        })
    }

    onButtonPress() {
        const {englishWord, finnishWord } = this.props;
        //console.log(englishWord, finnishWord);
        this.props.courseSave({ englishWord, finnishWord, uid: this.props.words.uid });
    }

    onAccept() {
        const { uid } = this.props.words;
    
        this.props.wordDelete({ uid });
        Actions.courses()
        this.setState({ showModal: false });
        
      }
    
      onDecline() {
        this.setState({ showModal: false });
      }

    render() {
        return (
            <Card>
                <CourseForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Delete
                    </Button>
                </CardSection>
                <Confirm 
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete the word?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { englishWord, finnishWord } = state.courseForm;

    return { englishWord, finnishWord };
}


export default connect(mapStateToProps, { courseUpdate, courseSave, wordDelete })(WordEdit);
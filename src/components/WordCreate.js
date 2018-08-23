import React, { Component } from 'react';
import { connect } from 'react-redux';
import { courseUpdate, wordCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import CourseForm from './CourseForm';

class WordCreate extends Component {

    onButtonPress() {
        const { englishWord, finnishWord } = this.props;

        this.props.wordCreate({ englishWord, finnishWord });
    }

    render() {
        console.log(this.props.word);

        return (
            <Card>  
                <CourseForm { ...this.props } />                  
                <CardSection>
                    <Button onPress = {this.onButtonPress.bind(this)}>
                        Remember me!
                    </Button>
                </CardSection>
            </Card>
        );
    };
};

const mapStateToProps = (state) => {
    const { englishWord, finnishWord } = state.courseForm; //course form index.js Reducer
    return { englishWord, finnishWord };
}

export default connect(mapStateToProps, { courseUpdate, wordCreate })(WordCreate);
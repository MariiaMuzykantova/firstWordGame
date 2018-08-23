import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { courseUpdate } from '../actions';
import { CardSection, Input } from './common';

class CourseForm extends Component {
    render() {
        return (
        <View>
            <CardSection>
                    <Input
                        label="English word:"
                        placeholder="cat"
                        value={this.props.englishWord}
                        onChangeText={text => this.props.courseUpdate({ prop: 'englishWord', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Finnish word:"
                        placeholder="kissa"
                        value={this.props.finnishWord}
                        onChangeText={text => this.props.courseUpdate({ prop: 'finnishWord', value: text })}
                    />
                </CardSection>
                </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { englishWord, finnishWord } = state.courseForm;

    return { englishWord, finnishWord };
}

export default connect(mapStateToProps, {courseUpdate})(CourseForm);
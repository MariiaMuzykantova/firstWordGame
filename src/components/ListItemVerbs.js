import React, { Component } from 'react';
import { Image, LayoutAnimation, Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { Card } from 'native-base';
import * as actions from '../actions';

class ListItemVerbs extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <View style={{flex: 1, paddingLeft: 15, fontSize: 16, fontStyle: 'italic'}}>
                        <Text style={{ fontSize: 18, backgroundColor: "#e3f1f1", padding: 10, fontStyle: "italic" }}>{library.item.description}</Text>
                        
                        <Image 
                            style={{width: 330, height: 500}}
                            source={{uri: library.item.image}} 
                        />
                    </View>
                </CardSection>
            )
        }
    }

    render() {
        const { titleStyle } = styles;
        //console.log(this.props.library.item.description);
        const { id, title } = this.props.library.item;
        

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <Card>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </Card>
            </TouchableWithoutFeedback>
        )

    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;

    return { expanded }
}

export default connect(mapStateToProps, actions)(ListItemVerbs);
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView } from 'react-native';
import { wordsFetch } from '../actions';
import ListItem from './ListItem';
import { Card, CardItem, Icon } from 'native-base';

class Courses extends Component {

    componentWillMount() {
        this.props.wordsFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        //nextProps are the next set of props that this component will be rendered with
        //this.props is still the old set of props
        this.createDataSource(nextProps)
    }

    createDataSource({ words }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.dataSource =ds.cloneWithRows(words)
    }

    renderRow(word) {
        return (
            <Card>
                <CardItem>
                    <Icon active name="arrow-forward" color={{ tintColor: 'orange' }}/>
                    <ListItem words={word}/>
                </CardItem>
            </Card>
            
        )
    }

    render() {
        console.log(this.props);

        return (
            <View style={{marginTop: 20}}>
                <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
                />
            </View> 
        );
    };
};

const mapStateToProps = state => {
    const words = _.map(state.words, (val, uid) => {
        return { ...val, uid }; // {shift: Monday, name: Alex, id: 12234}
    });
    return { words };
}

export default connect(mapStateToProps, { wordsFetch })(Courses);
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView, TextInput } from 'react-native';
import { wordsFetch } from '../actions';
import ListItem from './ListItem';
import { Card, CardItem, Icon } from 'native-base';
//import Activity from './Activity';
// import BouncyDrawer from 'react-native-bouncy-drawer';
//import Actions from 'react-native-router-flux';
// import MAIcon from 'react-native-vector-icons/MaterialIcons';
// import View from 'react-native-view';
//import { RSA_X931_PADDING } from 'constants';

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
                    {/* <Right>
                        <Icon name="arrow-forward"/>
                    </Right> */}
                </CardItem>
            </Card>
            
        )
    }

    // onTextSearch(text) {
    //     const newData = words.filter(function(item) {
    //         const itemData = item.word.toUpperCase();
    //         const textData = text.toUpperCase()
    //         return itemData.indexOf(textData) > -1
    //     })
        
    //         this.dataSource =ds.cloneWithRows(newData)
    //         this.text = text
    
    // }

    render() {
        console.log(this.props);

        return (
            <View style={{marginTop: 20}}>
                {/* <TextInput
                    style={{height: 30, 
                        borderWidth: 1, 
                        borserColor: 'blue',
                        marginBottom: 10, 
                        marginHorizontal: 15
                    }}
                    onChangeText={(text) => this.filterSearch(text)}
                    value={this.state.text}
                /> */}
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
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItemVerbs from './ListItemVerbs';

class LibraryList extends Component {
    renderItem(library) {
        return <ListItemVerbs library={library} />
    }

    render() {
        return (
            <FlatList 
                data = {this.props.libraries}
                renderItem = {this.renderItem}
                keyExtractor = {(library) => library.id.toString()}
            />
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
  };
  
  export default connect(mapStateToProps)(LibraryList);
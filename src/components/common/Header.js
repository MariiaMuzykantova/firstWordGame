//import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//making a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
</View>
);
};

const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 30
    }
 
};

//Make the component available to other parts of the app
export { Header };

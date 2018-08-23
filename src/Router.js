import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Courses from './components/Courses';
import WordCreate from './components/WordCreate';
import WordEdit from './components/WordEdit';
import ContactUs from './components/ContactUs';
import LibraryList from './components/LibraryList';
import Menu from './components/Menu';
import { Icon } from 'native-base';


class TabIcon extends Component {
    //var color = focused ? '#1abc9c' : '#7f8c8d';
    render() {
        const title = this.props.title;
        console.log(title)
        var icon = "";
        var label = "";
        if(title == "Menu") {
            icon = "home";
            label = "Menu";
        } else if (title == "6 Verbs Groups") {
            icon = "paper";
            label = "Verbs";
        } else if (title == "Dictionary") {
            icon = "book";
            label = "Words";
        } else if (title == "Add a new defenition:") {
            icon = "md-school";
            label = "Create";
        } else if (title == "Questions? Feedback?") {
            icon = "chatbubbles";
            label = "Info";
        } 

        return(
            <View>
                {/* <Button vertical transparent> */}
                    <Icon 
                        name={icon} 
                        style={{
                            color: this.props.selected ? '#1abc9c' : '#7f8c8d', 
                            justifyContent: "center", 
                            alignSelf: 'center'
                        }}
                    />
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>{label}</Text>
                {/* </Button> */}
            </View>
        );   
    } 
}

const RouterComponent = () => {
    return (
        <Router>  
            <Scene key="root">
                <Scene key='auth'>
                    <Scene
                        key="login" 
                        component={ LoginForm } 
                        title="Please Login" 
                        initial
                    />
                </Scene>                  

                <Scene key="main">
                    <Scene
                        key="tabbar"
                        tabs
                        tabBarStyle={{ backgroundColor: 'white'}}
                        sceneStyle={{flex: 1}}
                    >
                            <Scene 
                                key="menu"
                                component={Menu}
                                title="Menu"
                                direction="vertical"
                                icon={TabIcon}
                                sceneStyle={{paddingTop: 50}}
                                initial
                            />  

                            <Scene 
                                key="verbslist" 
                                component={ LibraryList } 
                                title="6 Verbs Groups"
                                icon={TabIcon}
                                sceneStyle={{paddingTop: 50}}
                            />

                            <Scene 
                                onRight={() => Actions.wordcreate()} 
                                rightTitle='Add'
                                key="courses" 
                                component={ Courses } 
                                title="Dictionary"
                                leftButtonIconStyle = {{ tintColor:'red'}}
                                icon={TabIcon}
                                sceneStyle={{paddingTop: 50}}
                            />

                            <Scene
                                key="wordcreate" 
                                component={ WordCreate } 
                                title="Add a new defenition:"
                                icon={TabIcon}
                                sceneStyle={{paddingTop: 50}}
                            />

                            <Scene 
                                key="wordedit" 
                                component={ WordEdit } 
                                title="Edit a word definition:"
                                sceneStyle={{paddingTop: 50}}
                            />
                        

                        <Scene 
                            key="contactus"
                            component={ ContactUs }
                            title="Questions? Feedback?"
                            icon={TabIcon}
                            sceneStyle={{paddingTop: 50}}
                        />
                    </Scene>
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent;
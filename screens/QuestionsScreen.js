import React from "react" 
import {View, Text, TouchableOpactity} from 'react-native'

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import firebase from "firebase";

let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
  }
export default class QuestionsScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false,
          light_theme: true,
        };
      }
    
      async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this._loadFontsAsync();
        this.fetchUser();
      }
    
      fetchUser = () => {
        let theme;
        firebase
          .database()
          .ref("/users/" + firebase.auth().currentUser.uid)
          .on("value", snapshot => {
            theme = snapshot.val().current_theme;
            this.setState({ light_theme: theme === "light" });
          });
      };
    render(){
        return(
            <View>
                
            </View>
        )
    }
}
/* QUESTIONS

What did John decide to do?

He decided to _____ after his victory

What was the theme of the story?

The theme was <Dropdown menu>



*/

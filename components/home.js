import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import About from "./about";
import { Actions } from 'react-native-router-flux'
    const goToAbout = () => {
        Actions.about()
    }



export default class Home extends Component {
    render() {
        return (
            <View>
                <Text>
                    If you like React, you'll also like React Native.
                </Text>
                <ThemeProvider>
                    <Button title="Hakkımızda!"
                            onPress={goToAbout}/>
                </ThemeProvider>
            </View>
        );
    }
}
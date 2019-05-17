import React, {Component} from 'react';
import { Router, Scene } from "react-native-router-flux";
import Home from "./components/home";
import About from "./components/about";

class App extends Component {
    render() {
        return (
            <Router>
                <Scene key = "root">
                    <Scene key = "home" component = {Home} title = "Home" initial = {true} />
                    <Scene key = "about" component = {About} title = "About" initial = {false} />
                </Scene>
            </Router>
        );
    }
}

export default App;
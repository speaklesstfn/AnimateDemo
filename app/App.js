/**
 * Created by tfn on 2017/3/27.
 */
import React, {Component} from 'react';
import {
    Navigator,
} from 'react-native';

import Home from './Home';

export default class App extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{name:'home',component:Home}}
                configureScene={(route,routeStack) => Navigator.SceneConfigs.FloatFromRight}
                renderScene={(route,navigator) => {
                    return <route.component {...route.params} name={route.name} navigator={navigator}/>
                }}
            />
        );
    }
}
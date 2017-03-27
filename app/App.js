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
                renderScene={(route,navigator) => {
                    return <route.component {...params} name={route.name} navigator={navigator}/>
                }}
            />
        );
    }
}
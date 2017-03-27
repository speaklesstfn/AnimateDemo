/**
 * Created by tfn on 2017/3/27.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import AnimateOne from './AnimateOne';
import AnimateTwo from './AnimateTwo';
import AnimateThree from './AnimateThree';

export default class Home extends Component {

    _onAnimateOneClick = () => {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'animateOne',
                component: AnimateOne,
            });
        }
    };

    _onAnimateTwoClick = () => {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'animateOne',
                component: AnimateTwo,
            });
        }
    };

    _onAnimateThreeClick = () => {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'animateOne',
                component: AnimateThree,
            });
        }
    };

    render() {
        return (
            <View
                style={styles.view}
            >
                <View
                    style={styles.titleView}
                >
                    <Text style={styles.titleText}>Home</Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this._onAnimateOneClick}
                >
                    <Text style={styles.buttonText}>动画1</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this._onAnimateTwoClick}
                >
                    <Text style={styles.buttonText}>动画2</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this._onAnimateThreeClick}
                >
                    <Text style={styles.buttonText}>动画3</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = Stylesheet.create({
    view: {
        flex: 1,
    },
    titleView: {
        height: 44,
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        color: '#ffffff',
    },
    button: {
        height: 45,
        marginTop: 20,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#1e90ff',
        borderColor: '#1e90ff',
    },
    buttonText: {
        fontSize: 20,
    },
});
/**
 * Created by tfn on 2017/3/27.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    BackAndroid,
} from 'react-native';

export default class AnimateTwo extends Component {
    componentDidMount() {
        const {navigator} = this.props;
        BackAndroid.addEventListener('hardwareBackPress', function () {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });
    }

    componentWillUnMount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    }

    _onBackButtonClick = () => {
        const {navigator} = this.props;

        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
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
                    <TouchableOpacity
                        style={styles.leftButton}
                        onPress={this._onBackButtonClick}
                    >
                        <Image source={require('./assets/back.png')}/>
                    </TouchableOpacity>

                    <Text style={styles.titleText}>动画2</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    leftButton: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        paddingHorizontal: 15,
        justifyContent: 'center',
    },
});
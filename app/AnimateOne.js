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
    Animated,
    Easing,
} from 'react-native';

export default class AnimateOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeInOpacity: new Animated.Value(0),
        };
    }

    componentDidMount() {
        const {navigator} = this.props;
        BackAndroid.addEventListener('hardwareBackPress', function () {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });

        Animated.timing(this.state.fadeInOpacity, {
            toValue: 1,
            duration: 3000,
            easing: Easing.circle,
        }).start();
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

                    <Text style={styles.titleText}>动画1</Text>
                </View>

                <Animated.View
                    style={[styles.animate,{opacity: this.state.fadeInOpacity,}]}
                >
                    <Text style={styles.text}>悄悄的,我出现了</Text>
                </Animated.View>
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
    animate: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 30,
    },
});
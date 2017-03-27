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

export default class AnimateTwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeInOpacity: new Animated.Value(0),
            rotation: new Animated.Value(0),
            fontSize: new Animated.Value(0),
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

        // Animated.parallel(['fadeInOpacity', 'rotation', 'fontSize'].map((index) => {
        //     return Animated.timing(this.state[index], {
        //         toValue: 1,
        //         duration: 3000,
        //         easing: Easing.linear,
        //     });
        // })).start();
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

    _onAnimatePress = () => {

        Animated.parallel(['fadeInOpacity', 'rotation', 'fontSize'].map((index) => {
            return Animated.timing(this.state[index], {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
            });
        })).start(() => {
            this.setState({
                fadeInOpacity: new Animated.Value(0),
                rotation: new Animated.Value(0),
                fontSize: new Animated.Value(0),
            });
        });
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

                <TouchableOpacity
                    style={styles.button}
                    onPress={this._onAnimatePress}
                >
                    <Text style={styles.buttonText}>点击开始动画</Text>
                </TouchableOpacity>

                <View
                    style={{
                        flex:1,
                        marginTop: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                    }}
                >
                    <Animated.View
                        style={[styles.animate,{
                        opacity:this.state.fadeInOpacity,
                        transform:[{
                            rotateZ:this.state.rotation.interpolate({
                                inputRange:[0,0.5,1],
                                outputRange:['0deg','360deg','180deg'],
                            }),
                        }],
                    }]}
                    >
                        <Animated.Text
                            style={{
                            fontSize:this.state.fontSize.interpolate({
                                inputRange:[0,0.5,1],
                                outputRange:[15,25,20],
                            }),
                        }}
                        >
                            试试看旋转着过来，虫合虫合
                        </Animated.Text>

                    </Animated.View>
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
    animate: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});
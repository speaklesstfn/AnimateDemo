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

export default class AnimateThree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anim: [new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)],
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
        Animated.sequence([
            Animated.stagger(500, this.state.anim.map((value) => {
                return Animated.timing(value, {
                    toValue: 1,
                });
            }).concat(
                this.state.anim.map((value) => {
                    return Animated.timing(value, {
                        toValue: 0,
                    })
                })
            )),
            Animated.delay(500),
            Animated.timing(this.state.anim[0], {
                toValue: 1,
            }),
            Animated.timing(this.state.anim[1], {
                toValue: -1,
            }),
            Animated.timing(this.state.anim[2], {
                toValue: 0.5,
            }),
            Animated.delay(500),
            Animated.parallel(this.state.anim.map((value) => {
                return Animated.timing(value, {
                    toValue: 0,
                });
            }))
        ]).start(() => {
            this.setState({
                anim: [new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)],
            });
        });
    };

    render() {

        const views = this.state.anim.map((value, index) => {
            return (
                <Animated.View
                    key={index}
                    style={[styles.animate,{
                        left: value.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 200]
                        }),
                    }]}
                >
                    <Text
                        style={{
                            fontSize:20,
                        }}
                    >
                        我是第{index + 1}个View
                    </Text>
                </Animated.View>
            );
        });

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

                    <Text style={styles.titleText}>动画3</Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this._onAnimatePress}
                >
                    <Text style={styles.buttonText}>点击开始动画</Text>
                </TouchableOpacity>

                <View
                    style={{
                        marginTop:20,
                    }}
                >
                    {views}
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
    leftButton: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        paddingHorizontal: 15,
        justifyContent: 'center',
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
    animate: {
        marginTop: 20,
        height: 40,
        width: 300,
        backgroundColor: '#1e90ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
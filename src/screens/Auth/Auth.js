import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText"
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import backgroundImage from "../../assets/background.jpg";
import validate from "../../utility/validation";
import { tryAuth } from "../../store/actions/index";

class AuthScreen extends Component {
    state = {
        viewMode: Dimensions.get('window').height > 600 ? "portrait" : "landscape",
        authMode: "login",
        controls: {
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched: false
            },
            password: {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 6
                },
                touched: false
            },
            confirmPassword: {
                value: "",
                valid: false,
                validationRules: {
                    equalTo: "password"
                },
                touched: false
            }
        }
    }
    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles);
    }

    updateStyles = (dims) => {
        this.setState({
            viewMode: dims.window.height > 600 ? "portrait" : "landscape"
        });
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyles)
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                authMode: prevState.authMode === "login" ? "signup" : "login"
            };
        });
    }

    loginHandler = () => {
        const authData = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value
        }
        this.props.onLogin(authData);
        startMainTabs();
    }

    updateInputState = (key, value) => {
        let connectedValue = {};
        if (this.state.controls[key].validationRules.equalTo) {
            const equalControl = this.state.controls[key].validationRules.equalTo;
            const equalValue = this.state.controls[equalControl].value;
            connectedValue = {
                ...connectedValue,
                equalTo: equalValue
            };
        }
        if (key === "password") {
            connectedValue = {
                ...connectedValue,
                equalTo: value
            };
        }
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    confirmPassword: {
                        ...prevState.controls.confirmPassword,
                        valid:
                            key === "password"
                                ? validate(
                                    prevState.controls.confirmPassword.value,
                                    prevState.controls.confirmPassword.validationRules,
                                    connectedValue
                                )
                                : prevState.controls.confirmPassword.valid
                    },
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(
                            value,
                            prevState.controls[key].validationRules,
                            connectedValue
                        ),
                        touched: true
                    }
                }
            };
        });
    };

    render() {
        let headingtext = null;
        let confirmPasswordControl = null;

        if (this.state.viewMode === "portrait") {
            headingtext = (
                <HeadingText>Please Log IN</HeadingText>
            );
        }
        if (this.state.authMode === "signup") {
            confirmPasswordControl = (
                <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordWapper : styles.landscapePasswordWapper}>
                    <DefaultInput placeholder="Confirm Password" style={styles.input}
                        value={this.state.controls.confirmPassword.value}
                        onChangeText={(val) => { this.updateInputState('confirmPassword', val) }}
                        valid={this.state.controls.confirmPassword.valid}
                        touched={this.state.controls.confirmPassword.touched}
                        secureTextEntry
                    />
                </View>
            );
        }
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.root}>
                    {headingtext}
                    <ButtonWithBackground
                        color="#29aaf4"
                        onPress={this.switchAuthModeHandler}
                    >
                        Switch to {this.state.authMode === "login" ? "Sign Up" : "Login"}
                    </ButtonWithBackground>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.inputContainer}>
                            <DefaultInput placeholder="Your email Address" style={styles.input}
                                value={this.state.controls.email.value}
                                onChangeText={(val) => { this.updateInputState('email', val) }}
                                valid={this.state.controls.email.valid}
                                touched={this.state.controls.email.touched}
                                keyboardType="email-address"
                            />
                            <View
                                style={this.state.viewMode === "portrait" || this.state.authMode === "login"
                                    ? styles.portraitPasswordContainer : styles.landscapePasswordContainer}
                            >
                                <View style={this.state.viewMode === "portrait" || this.state.authMode === "login"
                                    ? styles.portraitPasswordWapper : styles.landscapePasswordWapper}
                                >
                                    <DefaultInput placeholder="Password" style={styles.input}
                                        value={this.state.controls.password.value}
                                        onChangeText={(val) => { this.updateInputState('password', val) }}
                                        valid={this.state.controls.password.valid}
                                        touched={this.state.controls.password.touched}
                                        secureTextEntry
                                    />
                                </View>
                                {confirmPasswordControl}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <ButtonWithBackground
                        color="#29aaf4"
                        onPress={this.loginHandler}
                        disabled={
                            !this.state.controls.email.valid ||
                            !this.state.controls.password.valid ||
                            !this.state.controls.confirmPassword.valid && this.state.authMode === "signup"}>
                        Submit</ButtonWithBackground>
                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    landscapePasswordContainer: {
        justifyContent: "space-between",
        flexDirection: "row"
    },
    landscapePasswordWapper: {
        width: "45%"
    },
    portraitPasswordContainer: {
        justifyContent: "space-between",
        flexDirection: "column"
    },
    portraitPasswordWapper: {
        width: "100%"
    }

});

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (authData) => dispatch(tryAuth(authData))
    };
};

export default connect(null, mapDispatchToProps)(AuthScreen);


/* <Button title="Switch to Login" /> */
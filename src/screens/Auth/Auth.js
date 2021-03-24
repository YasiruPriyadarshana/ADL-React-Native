import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput"
import HeadingText from "../../components/UI/HeadingText/HeadingText"
import MainText from "../../components/UI/MainText/MainText"
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground"
import backgroundImage from "../../assets/background.jpg"

class AuthScreen extends Component {
    state = {
        respStyles: {
            pwContainerDirection: "column",
            pwContainerJustifyContent: "flex-start",
            pwWapperWidth: "100%"
        }
    }
    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", (dims) => {
            this.setState({
                respStyles: {
                    pwContainerDirection: Dimensions.get('window').height > 600 ? "column" : "row",
                    pwContainerJustifyContent: Dimensions.get('window').height > 600 ? "flex-start" : "space-between",
                    pwWapperWidth: Dimensions.get('window').height > 600 ? "100%" : "45%"
                }
            });
        });
    }

    loginHandler = () => {
        startMainTabs();
    }

    render() {
        let headingtext = null;

        if (Dimensions.get('window').height > 600) {
            headingtext = (
                <HeadingText>Please Log IN</HeadingText>
            );
        }
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.root}>

                    {headingtext}

                    <ButtonWithBackground color="#29aaf4" onPress={() => alert('Hello')}>Switch to Login</ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Your email Address" style={styles.input} />
                        <View
                            style={{
                                flexDirection: this.state.respStyles.pwContainerDirection,
                                justifyContent: this.state.respStyles.pwContainerJustifyContent
                            }}
                        >
                            <View style={{ width: this.state.respStyles.pwWapperWidth }}>
                                <DefaultInput placeholder="Password" style={styles.input} />
                            </View>
                            <View style={{ width: this.state.respStyles.pwWapperWidth }}>
                                <DefaultInput placeholder="Confirm Password" style={styles.input} />
                            </View>
                        </View>
                    </View>
                    <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler} >Submit</ButtonWithBackground>
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
    }
    // passwordContainer: {
    //     justifyContent: "space-between",
    //     flexDirection: Dimensions.get('window').height > 600 ? "column" : "row"
    // },
    // passwordWapper: {
    //     width: Dimensions.get('window').height > 600 ? "100%" : "45%"
    // }

});

export default AuthScreen;


/* <Button title="Switch to Login" /> */
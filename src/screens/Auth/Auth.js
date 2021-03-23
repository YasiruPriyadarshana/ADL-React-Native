import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput"
import HeadingText from "../../components/UI/HeadingText/HeadingText"
import MainText from "../../components/UI/MainText/MainText"
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground"
import backgroundImage from "../../assets/background.jpg"

class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs();
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.root}>
                    <MainText>
                        <HeadingText>Please Log IN</HeadingText>
                    </MainText>
                    <ButtonWithBackground color="#29aaf4" onPress={() => alert('Hello')}>Switch to Login</ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Your email Address" style={styles.input} />
                        <DefaultInput placeholder="Password" style={styles.input} />
                        <DefaultInput placeholder="Confirm Password" style={styles.input} />
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
        flex:1
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    }

});

export default AuthScreen;


/* <Button title="Switch to Login" /> */
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
       viewMode: Dimensions.get('window').height > 600 ? "portrait":"landscape"
    }
    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles);
    }

    updateStyles = (dims) => {
        this.setState({
            viewMode: dims.window.height > 600 ? "portrait":"landscape"
        });
    }

    componentWillUnmount(){
        Dimensions.removeEventListener("change", this.updateStyles)
    }

    loginHandler = () => {
        startMainTabs();
    }

    render() {
        let headingtext = null;

        if (this.state.viewMode === "portrait") {
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
                        <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordContainer: styles.landscapePasswordContainer}>
                            <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordWapper: styles.landscapePasswordWapper}>
                                <DefaultInput placeholder="Password" style={styles.input} />
                            </View>
                            <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordWapper: styles.landscapePasswordWapper}>
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
    },
    landscapePasswordContainer: {
        justifyContent: "space-between",
        flexDirection:"row"
    },
    landscapePasswordWapper: {
        width: "45%"
    },
    portraitPasswordContainer: {
        justifyContent: "space-between",
        flexDirection:"column"
    },
    portraitPasswordWapper: {
        width: "100%"
    }

});

export default AuthScreen;


/* <Button title="Switch to Login" /> */
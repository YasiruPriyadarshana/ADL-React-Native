import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import startMainTabs from "../MainTabs/startMainTabs";


class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs();
    }    

    render() {
        return (
            <View style={styles.root}>
                <Text>Hello React Native Navigation</Text>
                <Button title="Login" onPress={this.loginHandler} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
    }
});

export default AuthScreen;



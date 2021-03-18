import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import startMainTabs from "../MainTabs/startMainTabs";
import Provider from 'react-redux';
import configureStore from "../../store/configureStore";

const store = configureStore();

let id;
loginHandler = () => {
    startMainTabs(id);
}

const AuthScreen = (props) => {
    id = props.componentId;
    return (
        <View style={styles.root}>
            <Text>Hello React Native Navigation</Text>
            <Button title="Login" onPress={this.loginHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
    }
});

export default AuthScreen;



import React, { Component } from "react";

import { View, Image, Button, StyleSheet } from "react-native"
import imagePlaceHolder from "../../assets/background.jpg";
import * as ImagePicker from 'react-native-image-picker';

class PickImage extends Component {
    state={
        response:null
    }

    imagePickerHandler=()=>{
        // ImagePicker.launchCamera(
        //     {
        //         mediaType: 'photo',
        //         includeBase64: false,
        //         maxHeight: 200,
        //         maxWidth: 200
        //     },
        //     (response) => {
        //         this.setState({
        //             response:response.uri
        //         });
        //     },
        // )
        ImagePicker.launchImageLibrary(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200
            },
            (response) => {
                this.setState({
                    response:response.uri
                });
            },
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <Image source={{uri: this.state.response}} style={styles.previewImage} />
                </View>
                <View style={styles.button}>
                    <Button title="Pick Image" onPress={this.imagePickerHandler} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    button: {
        margin: 8
    },
    previewImage: {
        width: "100%",
        height: "100%"
    },

})


export default PickImage;

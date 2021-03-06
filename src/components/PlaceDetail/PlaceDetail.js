import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetail = props => {
    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage} />
                <Text style={styles.palceName}>{props.selectedPlace.name}</Text>
            </View>
        );
    }
    return (
        <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modelContainer}>
                {modalContent}
                <View>
                    <Button title="delete" color="red" onPress={props.onItemDeleted}/>
                    <Button title="close" onPress={props.onModalClosed}/>
                </View>
            </View>
        </Modal>
    );

};

const styles = StyleSheet.create({
    modelContainer: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    palceName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
});

export default placeDetail;
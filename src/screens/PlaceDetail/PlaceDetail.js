import React from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = props => {

    return (

        <View style={styles.container}>
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage} />
                <Text style={styles.palceName}>{props.selectedPlace.name}</Text>
            </View>
            <View>

                <TouchableOpacity onPress={props.onItemDeleted}>
                    <View style={styles.deleteButton}>
                        <Icon size={30} name="ios-trash" color="red" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );

};

const styles = StyleSheet.create({
    container: {
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
    },
    deleteButton: {
        alignItems: "center"
    }
});

export default placeDetail;

/* <Button title="delete" color="red" onPress={props.onItemDeleted}/> 
 <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide"> 

if (props.selectedPlace) {
    modalContent = (
       
    );
}

<Button title="close" onPress={props.onModalClosed} />
*/
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import { deletePlace } from "../../store/actions/index"

class PlaceDetail extends Component {
    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        Navigation.pop('PlaceDetails_ID');
    }

    render() {
        return (

            <View style={styles.container}>
                <View>
                    <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
                    <MapView
                        initialRegion={{
                            ...this.props.selectedPlace.location,
                            latitudeDelta: 0.0122,
                            longitudeDelta:
                                Dimensions.get("window").width /
                                Dimensions.get("window").height *
                                0.0122
                        }}
                        style={styles.map}
                    >
                        <MapView.Marker coordinate={this.props.selectedPlace.location} />
                    </MapView>

                    
                </View>
                <View >
                <Text style={styles.palceName}>{this.props.selectedPlace.name}</Text>
                    <TouchableOpacity onPress={this.placeDeletedHandler}>
                        <View style={styles.deleteButton}>
                            <Icon size={30} name="ios-trash" color="red" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }

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
    },
    map: {
        width: "100%",
        height: 250,
        marginTop:5
    },
});

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);

/* <Button title="delete" color="red" onPress={props.onItemDeleted}/>
 <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">

if (props.selectedPlace) {
    modalContent = (

    );
}

<Button title="close" onPress={props.onModalClosed} />
*/
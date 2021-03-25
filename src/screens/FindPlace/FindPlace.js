import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import PlaceList from "../../components/PlaceList/PlaceList";


class FindPlaceScreen extends Component {
    state = {
        placesLoaded: false,
        removeAnim: new Animated.Value(1),
        placesAnim: new Animated.Value(0)
    }
    constructor(props) {
        super(props);
        console.log(props.componentId);
        Navigation.events().bindComponent(this);
    }
    navigationButtonPressed({ buttonId }) {
        if (buttonId === 'sideMenu') {
            Navigation.mergeOptions('FindPlace_TAB', {
                sideMenu: {
                    left: {
                        visible: true
                    }
                }
            });
        }
    }


    itemSelectedHandler = key => {
        const selPlace = this.props.places.find(place => {
            return place.key === key;
        });
        Navigation.push('FindPlace_SCREEN', {
            component: {
                name: 'awesome-places.PlaceDetailsScreen',
                id: 'PlaceDetails_ID',
                passProps: {
                    selectedPlace: selPlace
                },
                options: {
                    topBar: {
                        title: {
                            text: selPlace.name,
                        }
                    }
                }
            },
        });
    }


    placesLoadedHandler = () => {
        Animated.timing(this.state.placesAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    };

    placeSearchHandler = () => {
        Animated.timing(this.state.removeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(() => {
            this.setState({
                placesLoaded: true
            });
            this.placesLoadedHandler();
        });
    };

    render() {
        let content = (
            <Animated.View
                style={{
                    opacity: this.state.removeAnim,
                    transform: [{
                        scale: this.state.removeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [3, 1]
                        })
                    }]
                }}
            >
                <TouchableOpacity onPress={this.placeSearchHandler}>
                    <View style={styles.searchButton}>
                        <Text style={styles.searchButoonText}>Find Places</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );
        if (this.state.placesLoaded) {
            content = (
                <Animated.View
                    style={{
                        opacity: this.state.placesAnim
                    }}
                >
                    <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
                </Animated.View>
            );
        }
        return (
            <View style={this.state.placesLoaded ? null : styles.buttonContainer}>
                {content}
            </View>
        );
    }

};

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    searchButton: {
        borderColor: "orange",
        borderWidth: 3,
        borderRadius: 50,
        padding: 20
    },
    searchButoonText: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 26
    }
});


const mapStateToProps = state => {
    return {
        places: state.places.places
    };
};

export default connect(mapStateToProps)(FindPlaceScreen);
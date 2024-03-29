import React, { Component } from 'react';
import { View, Button, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import PlaceInput from "../../components/PlaceInput/PlaceInput"
import { addPlace } from "../../store/actions/index";
import MainText from "../../components/UI/MainText/MainText"
import HeadingText from "../../components/UI/HeadingText/HeadingText"
import PickImage from "../../components/PickImage/PickImage"
import PickLocation from "../../components/PickLocation/PickLocation"
import validate from "../../utility/validation";

class SharePlaceScreen extends Component {

    state = {
        controls: {
            placeName: {
                value: "",
                valid: false,
                touched: false,
                validationRules: {
                    notEmpty: true
                }
            },
            location: {
                value: null,
                valid: false
            },
            image: {
                value: null,
                valid: false
            }
        }
    };

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }
    navigationButtonPressed({ buttonId }) {
        if (buttonId === 'sideMenu') {
            Navigation.mergeOptions('SharePlace_TAB', {
                sideMenu: {
                    left: {
                        visible: true
                    }
                }
            });
        }
    }

    placeNameChangedHandler = val => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    placeName: {
                        ...prevState.controls.placeName,
                        value: val,
                        valid: validate(val, prevState.controls.placeName.validationRules),
                        touched: true
                    }
                }
            };
        });
    };

    locationPickedHandler = location => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    location: {
                        value: location,
                        valid: true
                    }
                }
            }
        });
    }

    imagePickedHandler = image => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    image: {
                        value: image,
                        valid: true
                    }
                }
            }
        });
    }

    placeAddedHandler = () => {
        this.props.onAddPlace(
            this.state.controls.placeName.value,
            this.state.controls.location.value,
            this.state.controls.image.value
        );
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText><HeadingText>Share a place with us</HeadingText></MainText>
                    <PickImage onImagePick={this.imagePickedHandler} />
                    <PickLocation onLocationPick={this.locationPickedHandler} />
                    <PlaceInput
                        placeData={this.state.controls.placeName}
                        onChangeText={this.placeNameChangedHandler} />
                    <View style={styles.button}>
                        <Button
                            title="Share the Place"
                            onPress={this.placeAddedHandler}
                            disabled={!this.state.controls.placeName.valid || !this.state.controls.location.valid || !this.state.controls.image.valid}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placename, location, image) => dispatch(addPlace(placename, location, image)),
        onDeletePlace: () => dispatch(deletePlace()),
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
import React, { Component } from "react";

import DefaultInput from "../UI/DefaultInput/DefaultInput"

const PlaceInput = props => (

    <DefaultInput
        placeholder="Place Name"
        value={props.placeName}
        onChangeText={props.onChangeText} />
);


export default PlaceInput;

/*
placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }

        this.props.onPlaceAdded(this.state.placeName);
    };

        placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    };

*/
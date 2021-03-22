import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import PlaceList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {
    itemSelectedHandler = key => {
        const selPlace = this.props.places.find(place =>{
            return place.key === key;
        });
        Navigation.push('FindPlace_TAB',{
            component: {
                name: 'awesome-places.PlaceDetailsScreen',
                id: 'PlaceDetails_ID',
                text:selPlace.name,
                passProps: {
                    selectedPlace:selPlace
                }
              },
        });
    }

    render() {
        return (
            <View>
                <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler}/>
            </View>
        );
    }

};


const mapStateToProps = state => {
    return {
        places: state.places.places
    };
};

export default connect(mapStateToProps)(FindPlaceScreen);
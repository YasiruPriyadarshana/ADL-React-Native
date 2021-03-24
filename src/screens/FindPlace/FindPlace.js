import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import PlaceList from "../../components/PlaceList/PlaceList";


class FindPlaceScreen extends Component {
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
        const selPlace = this.props.places.find(place =>{
            return place.key === key;
        });
        Navigation.push('FindPlace_SCREEN',{
            component: {
                name: 'awesome-places.PlaceDetailsScreen',
                id: 'PlaceDetails_ID',
                passProps: {
                    selectedPlace:selPlace
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
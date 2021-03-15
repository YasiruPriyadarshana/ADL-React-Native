import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";
import FindPlace from "./src/screens/FindPlace/FindPlace";
import SharePlace from "./src/screens/SharePlace/SharePlace";

// Register Screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);
Navigation.registerComponent("awesome-places.FindPlace", () => FindPlace);
Navigation.registerComponent("awesome-places.SharePlace", () => SharePlace);

// Start a App
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'awesome-places.AuthScreen'
            }
          }
        ]
      }
    }
  });
});

// import React, { Component } from "react";
// import { StyleSheet, Text, View, TextInput, Button } from "react-native";
// import { connect } from 'react-redux';

// import PlaceInput from './src/components/PlaceInput/PlaceInput';
// import PlaceList from './src/components/PlaceList/PlaceList';
// import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import {addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';
// // import placeImage from './src/assets/beautiful-place.jpg';

// class App extends Component {


//   placeAddedHandler = placeName => {
//     this.props.onAddPlace(placeName);
//   };

//   modalClosedHandler = () => {
//     this.props.onDeselectPlace();
//   }
  

//   placeDeletedHandler = () => {
//     this.props.onDeletePlace();
//   }

//   placeSelectedHandler = key => {
//     this.props.onSelectPlace(key)
//   }

  

//   render() {
//     return (
//       <View style={styles.container}>
//         <PlaceDetail selectedPlace={this.props.selectedPlace} onItemDeleted={this.placeDeletedHandler} onModalClosed={this.modalClosedHandler} />
//         <PlaceInput onPlaceAdded={this.placeAddedHandler} />
//         <PlaceList places={this.props.places}
//           onItemSelected={this.placeSelectedHandler} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 26,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "flex-start"
//   }
// });

// const mapStateToProps = state =>{
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   };
// };

// const mapDispatchToProps = dispatch =>{
//   return{
//     onAddPlace: (name)=> dispatch(addPlace(name)),
//     onDeletePlace: ()=> dispatch(deletePlace()),
//     onSelectPlace: (key)=> dispatch(selectPlace(key)),
//     onDeselectPlace: ()=> dispatch(deselectPlace())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);



  // state = {
  //   places: [],
  //   selectedPlace: null
  // };

//add
// this.setState(prevState => {
//   return {
//     places: prevState.places.concat({
//       key: Math.random(),
//       name: placeName,
//       image: {
//         uri: "https://cdn.wallpapersafari.com/37/14/quvyai.jpg"
//       }
//     })
//   };
// });

//delete
// this.setState(prevState => {
//   return {
//     places: prevState.places.filter(place => {
//       return place.key !== prevState.selectedPlace.key;
//     }),
//     selectedPlace: null
//   };
// });

//deselect
// this.setState({
//   selectedPlace: null
// });

//select
// this.setState(prevState => {
//   return {
//     selectedPlace: prevState.places.find(place => {
//       return place.key === key;
//     })
//   }
// });
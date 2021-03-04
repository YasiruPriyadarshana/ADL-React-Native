import React from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";

import ListItem from '../ListItem/ListItem'

const placeList = props => {
    // const placesOutput = props.places.map((place, i) => ());
    // key={i}

    return <FlatList style={styles.listcontainer}
        data={props.places}
        renderItem={(info) => (
            <ListItem 
                placeName={info.item.value}
                onItemPressed={() => props.onItemDeleted(info.item.key)}
            />
        )} />;
    // <ScrollView style={styles.listcontainer}>{placesOutput}</ScrollView>
};


const styles = StyleSheet.create({
    listcontainer: {
        width: "100%"
    }
});

export default placeList;
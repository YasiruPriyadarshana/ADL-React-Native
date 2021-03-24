import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Touchable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {
    render() {
        console.log("work");
        return (
            <View style={[styles.container, {width: Dimensions.get("window").width * 0.8}]}>
                <TouchableOpacity>
                    <View style={styles.drawerItems}>
                        <Icon name="log-out-outline" size={30} color="#bbb" style={styles.drawerItemIcon}/>
                        <Text>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop:50,
        backgroundColor:"white",
        flex:1
    },
    drawerItems:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        backgroundColor:"#eee"
    },
    drawerItemIcon:{
        marginRight:10
    }
});

export default SideDrawer;
import React from "react";
import {StyleSheet, View, Image, Dimensions} from "react-native";
const WIDTH = Dimensions.get('window').width;
const HIGH = Dimensions.get('window').height;


export default function Spflash ({navigation}){
    setTimeout( () => {
        navigation.push('signin')
    },3000);

    return(
        <View style={styles.container}>
            <Image source={require('../images/background.jpg')}
                   style={styles.images}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgb(32, 53, 70)',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    images:{
        width:WIDTH,
        height:HIGH,
        position:'absolute',
    },


});
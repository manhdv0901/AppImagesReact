import React from "react";
import {StyleSheet, View, Image, Dimensions} from "react-native";
const WIDTH = Dimensions.get('window').width


export default function Spflash ({navigation}){
    setTimeout( () => {
        navigation.push('signin')
    },1000);

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
        width:450,
        height:730,
        position:'absolute',
    },
    text:{
        width:WIDTH,
        height:100,
        color:'white',
        textAlign:'center',
        fontSize:36,
        fontWeight:'bold',
    }

});
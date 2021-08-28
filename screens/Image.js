import React from "react";
import {Image, View, StyleSheet, Text} from "react-native";

export default function ({route,navigation}){
    const {linkImage} = route.params;
    const {linkTitle} = route.params;
    const {linkId} = route.params;
    return(
        <View style={styles.container}>
            <Image source={{uri: linkImage}}
                   style={styles.imagess}
            />
            <Text>{linkTitle}</Text>
            <Text>{linkId}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#C1FFF0',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imagess:{
        width:430,
        height:600,
        borderRadius:40,
    }
})
import React, {useState} from "react";
import {Dimensions, FlatList, StyleSheet, Text, View} from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

export default function UsersList({navigation}){
    const [data, setData] = useState([]);
    function getData(){
        firebase.database().ref('us/').on('value', function (snapsoft){
            let array = [];
            snapsoft.forEach(function (childSnapsoft){
                var childData = childSnapsoft.val();
                array.push({
                    phoneId: childSnapsoft.key,
                    pass: childData.pass,
                });
            });
            setData(array);
            // console.log(array);
            // alert(array)
        })
    }
    function deleteUser(phoneId){
        firebase.database.ref('us/' +phoneId).remove()
        alert('Xóa user thành công !')
    }
    return(
        <View style={styles.container}>
            <FlatList data={data}
                      keyExtractor={({item}, index) => {index.toString()}}
                      renderItem={({item, index}) =>
                        <Text>{item.phoneId}</Text>
                      }/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C1FFF0',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
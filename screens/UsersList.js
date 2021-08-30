import React, {useEffect, useState} from "react";
import {Button, Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

const WIDTH = Dimensions.get('window').width

export default function UsersList({navigation}){
    const [data, setData] = useState([]);

    useEffect(() => {
    const firebaseConfig = {
        apiKey: "AIzaSyCrjGXgv-yAvOOy8QpzOetOn93-HQd0U8A",
        authDomain: "user-login-react-native.firebaseapp.com",
        databaseURL: "https://user-login-react-native-default-rtdb.firebaseio.com",
        projectId: "user-login-react-native",
        storageBucket: "user-login-react-native.appspot.com",
        messagingSenderId: "514718015007",
        appId: "1:514718015007:web:c647d6e117f52638353f2a",
        measurementId: "G-1D1VETL9C7"
    };
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
            console.log('\n Connect firebase Succesfully list user');
        }
        getData();
        // console.log(data);
    }, [])




    const getData = () =>{
        firebase.database().ref('us/').on('value', function (snapsoft){
            let array = [];
            snapsoft.forEach(function (childSnapsoft){
                var childData = childSnapsoft.val();
                array.push({
                    id: childSnapsoft.key,
                    pass: childData.Pass,
                });
            });
            setData(array);

        })
    }

    return(
        <View style={styles.container}>
                <FlatList data={data}
                          keyExtractor={({item}, index) => {index.toString()}}
                          renderItem={({item, index}) =>

                              <TouchableOpacity style={styles.textflast}
                                                onPress={() => alert('User: '+item.id+'- Pass: '+item.pass)}
                              >
                                  <Text>Số điện thoại: {item.id}</Text>
                                  <Text >Mật khẩu: {item.pass}</Text>
                              </TouchableOpacity>


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
    textflast:{
        width: WIDTH,
        marginTop: 10,
        borderWidth:3,
        padding:10
    }
});
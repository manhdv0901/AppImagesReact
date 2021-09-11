//npm install @react-navigation/native @react-navigation/stack
//expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import SpflashScreen from "./screens/SpflashScreen";
import SignInScreen from "./screens/SignInScreen";
import ListImgaesScreen from "./screens/ListImgaesScreen";
import ImageScreen from "./screens/ImageScreen";
import UsersListScreen from "./screens/UsersListScreen"
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

export default function App() {
  //ckeck connect firebase
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
      console.log('\n Connect firebase Succesfully');
    }
  }, [])



  const Stack = createStackNavigator();
  return (
      //screens switch
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name='spflash'
                        component={SpflashScreen}
                        options={{headerShown:false}}
          />
          <Stack.Screen name='signin'
                        component={SignInScreen}
                        options={{title:'Đăng nhập'}}/>
          <Stack.Screen name='listimage'
                        component={ListImgaesScreen}
                        options={{title:'Danh sách ảnh'}}/>
          <Stack.Screen name='image'
                        component={ImageScreen}
                        options={{title:'Hình ảnh'}}/>
          <Stack.Screen name='userslist'
                        component={UsersListScreen}
                        options={{title:'Danh sách người dùng'}}
          />
        </Stack.Navigator>
      </NavigationContainer>

  );
}


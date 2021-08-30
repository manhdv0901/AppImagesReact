
import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import {FlatList} from "react-native-web";



export default function SignIn  ({navigation}) {
    const[phone, setPhone] = useState('');
    const[pass, setPass] = useState('');
    const [data, setData] = useState([]);

    let regexPhone ="^0\\d{9}$"
    let isOkPhone = phone.match(regexPhone);
    let checkk = true;

    function addUserSignIn (phoneId, pass){
        if (phone.toString() == '' || pass.toString() == ''){
            alert('thông tin không được để trống');
            return checkk;
        }else if (phone.toString() == 'admin' && pass.toString()=='admin'){
            navigation.push('userslist');
            return checkk;
        }else if (!isOkPhone){
            alert('Số điện thoại không đúng định dạng');
            return checkk;
        }

        if(checkk){
            firebase.database().ref('us/' + phoneId).set({
                Pass: pass,
            }, function (error){
                if (error){
                    console.log('Can not user to firebase');
                }else {

                    console.log('Add user succesfully');

                }
            });
            alert('Đăng nhập thành công !');
                navigation.navigate('listimage');
        }else{
            console.log('Error');
        }
    }

    function updateUser (phoneId, pass){
        if (phone.toString() == '' || pass.toString() == ''){
            alert('thông tin không được để trống');
            return checkk;
        }else if (phone.toString() == 'admin' && pass.toString()=='admin'){
            navigation.push('userslist');
            return checkk;
        }else if (!isOkPhone){
            alert('Số điện thoại không đúng định dạng');
            return checkk;
        }

        if(checkk){
            firebase.database().ref('us/' + phoneId).set({
                Pass: pass,
            }, function (error){
                if (error){
                    console.log('Can not user to firebase');
                }else {

                    console.log('Update user succesfully');

                }
            });
            alert('Update succesfully !');

        }else{
            console.log('Error');
        }
    }


    function getData(){
        firebase.database().ref('us/').on('value', function (snapsoft){
            let array = [];
            snapsoft.forEach(function (childSnapsoft){
                var childData = childSnapsoft.val();
                array.push({
                    phoneId: childSnapsoft.key,
                    pass: childData.Pass,
                });
            });
            setData(array);
            console.log(data);
            // alert(array)
        })
    }

    function deleteUser(phoneId){
        firebase.database().ref('us/'+phoneId).remove()
        alert('Delete succesfully');
        console.log('Delete user '+ phoneId);
    }

    return(
        <View style={styles.container}>
            <Image source={require('../images/anh3.png')}
                   style={{width:63,
                       height:63,
                       marginTop:-80}}/>

            <Image source={require('../images/anh9.png')}
                   style={{width:131,
                       height:31,
                       marginTop:80}}/>

            <View style={{backgroundColor: '#5E239D',
                height:72,
                marginTop:60}}>

                <TextInput style={{width:279,
                    height:72,
                    backgroundColor:'#5E239D',
                    color:'white',
                    paddingLeft:35,
                    fontSize:16}}
                           onChangeText={(txtPhone) => setPhone(txtPhone)}
                           value={phone}/>

                <Image style={{marginLeft:10,
                    marginTop:30,
                    position:'absolute'}}
                       source={require('../images/anh13.png')}/>

            </View>
            <View style={{backgroundColor: '#5E239D',
                width:279,
                height:72,
                marginTop:5}}>

                <TextInput style={{width:279,
                    height:72,
                    backgroundColor:'#5E239D',
                    color:'white',
                    paddingLeft:35,
                    fontSize:16}}
                           secureTextEntry = {true}
                           onChangeText={(txtPass) => setPass(txtPass)}
                           value={pass}/>

                <Image style={{marginLeft:10,
                    marginTop:30,
                    position:'absolute'}}
                       source={require('../images/anh12.png')}/>

            </View>
            <TouchableOpacity
                onPress={() => addUserSignIn(phone, pass)}>
                <View style={{width:279,
                    height:72,
                    borderWidth:4,
                    borderColor:'#5E239D',
                    marginTop:5}}>
                    <Text style={{textTransform:'uppercase',
                        fontSize:20,
                        marginTop:20,
                        marginLeft:90}}>
                        proceed
                    </Text>
                </View>
            </TouchableOpacity>
            <Text style={{color:'#5E239D',
                fontSize:17,
                marginTop:100,
                marginRight:180,
                textTransform:'uppercase'}}
                  onPress = {() => deleteUser(phone)}
            >
                Delete User
            </Text>
            <Text style={{color:'#5E239D',
                fontSize:17,
                marginLeft:200,
                marginTop:-27,
                textTransform:'uppercase'}}
                  onPress={() => updateUser(phone, pass) }>
                Update User
            </Text>



        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#C1FFF0',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
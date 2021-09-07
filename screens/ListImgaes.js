import React, {useState} from "react";
import {Image, StyleSheet, View, FlatList, TouchableOpacity, Text} from "react-native";

export default function ListImgaes ({navigation}){
    const [images, loadImages] = useState([]);

        //get api
        fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=830d116611c3f22c1598d0009d06d604&user_id=193860729%40N08&tags=&group_id=&extras=views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&per_page=43&page=1&format=json&nojsoncallback=1')
    //fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=837872ab8dbaedcc627a45b91f2b6f75&user_id=191841091%40N07&tags=images_0&extras=description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o+per_page&per_page=20&page=1&format=json&nojsoncallback=1")
        .then((response) => response.json())
        .then((result) => {loadImages(result.photos.photo)})
        .catch((e) => console.error(e));

    return(
        <View style={styles.container}>
            <FlatList contentContainerStyle={{flexDirection:'column'}} numColumns={2}
                      data={images}
                      renderItem={({item}) =>
                      <TouchableOpacity
                          // style={styles.touch}
                          onPress={() =>
                          navigation.push('image',{

                              //put data to screen
                              linkImage: item.url_c,
                              linkTitle: item.title,
                              linkId: item.id,
                          })}
                          activeOpacity={0.6}>
                          <View style={styles.viewImages}>
                              <Image source={{uri: item.url_c}}
                                     style={styles.images}/>
                          </View>
                      </TouchableOpacity>
                      }

            />
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

    images: {
        width:200,
        height:150,
        borderRadius:10
    },

    viewImages: {
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 20,
        shadowColor: 'white',
        shadowOffset: { width: 170, height: 150 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 10
    },
    touch:{
        width:200,
        height:150
    }
});
import React from "react";
import {View, StyleSheet, TouchableHighlight, Image} from "react-native";
import showAlert from './utils/showAlert';

type MovieProps = {
    title: string;
    img: string;
}

const MovieBig = (props: MovieProps) => {
    const onPress = () => {
        showAlert(props.title, 'Alert Button pressed', [
          { text: 'Cancel', style: 'cancel' },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    };

    return(
        <TouchableHighlight onPress={onPress}>
            <View style={styles.movie}>
                <Image source={{uri:props.img}} resizeMode="cover" style={styles.imageback}>
                </Image>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    movie :{
        height:400,
    width:280,
    borderRadius:5,
    backgroundColor:"#303030"
    },
    movietitle:{
        color:"#fff"
    },
    imageback:{
        position:"absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        borderRadius:5
    }
});

export default MovieBig;
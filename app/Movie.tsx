import React from "react"
import {View, Text, StyleSheet, ImageBackground, Image, TouchableNativeFeedback, TouchableHighlight} from "react-native"

type MovieProps = {
    title: string;
    img: string
}

const Movie = (props: MovieProps) => {
    const onPress = () => {alert(props.title)}
    return(
        <TouchableHighlight onPress={onPress}>
        <View style={styles.movie}><Image source={{uri:props.img}} resizeMode="cover" style={styles.imageback}>
            </Image></View>
            </TouchableHighlight>
    );
}



const styles = StyleSheet.create({
    movie :{
        height:160,
    width:112,
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

export default Movie;
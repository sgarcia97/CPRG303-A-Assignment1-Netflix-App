import React from "react"
import {View, StyleSheet, Image, TouchableHighlight,Text} from "react-native"
import showAlert from './utils/showAlert';


type MovieProps = {
    title: string;
    img: string;
    count: string;
}

const MovieCountdown = (props: MovieProps) => {

    const onPress = () => {
        showAlert(props.title, 'Netflix', [
          { text: 'Cancel', style: 'cancel' },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    };

    return(
        <TouchableHighlight onPress={onPress}>
            <View style={styles.count}>
                <View style={styles.counttextwrapper}><Text style={styles.counttext}>{props.count}</Text></View>
            <View style={styles.movie}>
                <Image source={{uri:props.img}} resizeMode="cover" style={styles.imageback}>
                </Image>
            </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    movie :{
        height:160,
    width:112,
    borderRadius:5,
    backgroundColor:"#303030",
    position:"absolute",
    right:0,
    bottom:0
    },
    movietitle:{
        color:"#fff"
    },
    count:{
        width:170,
        height:160,

    },
    counttextwrapper:{
     
        left:0,
        bottom:5
    },
    counttext:{
        fontSize:150,
        fontWeight:"bold",
        color:"#fff", 
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

export default MovieCountdown;
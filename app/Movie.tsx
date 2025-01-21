import React from "react"
import {View, StyleSheet, Image, TouchableHighlight,Text} from "react-native"
import showAlert from './utils/showAlert';

type MovieProps = {
    title: string;
    img: string;
    stat: string;
}

const Movie = (props: MovieProps) => {

    const onPress = () => {
        showAlert(props.title, 'Netflix', [
          { text: 'Cancel', style: 'cancel' },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    };

    return(
        <TouchableHighlight onPress={onPress}>
            <View style={styles.movie}>
            { props.stat !== '' ? <View style={styles.status}><View style={styles.innerstatus}><Text style={styles.statustxt}>{props.stat}</Text></View></View> : ''}
                <Image source={{uri:props.img}} resizeMode="cover" style={styles.imageback}></Image>
                
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
    position:"relative"
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
    },
    status:{
        position:"absolute",
        bottom:0,
        left:5,
        right:5,
        zIndex:2,
        flexDirection:"row",
        justifyContent:"center"
       
    },
    innerstatus:{
        backgroundColor:"red",
        paddingBlock:2,
        paddingInline:6,
        paddingBottom:3,
        borderTopLeftRadius:3,
        borderTopRightRadius:3

    },
    statustxt:{
        color:"#fff",
        fontSize:11,
        textAlign:"center",
        fontWeight:600,
        
    }
});

export default Movie;
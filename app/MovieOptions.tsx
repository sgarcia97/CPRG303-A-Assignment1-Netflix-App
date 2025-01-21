import React from "react"
import {View, Text, StyleSheet, ImageBackground, Image, TouchableNativeFeedback, TouchableHighlight} from "react-native"
import showAlert from './utils/showAlert';
import {Icon} from "react-native-elements"

type MovieProps = {
    title: string;
    img: string
}

const Movie = (props: MovieProps) => {


    const onPress = () => {
        showAlert(props.title, 'Netflix', [
          { text: 'Cancel', style: 'cancel' },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    }

    return(
        <TouchableHighlight onPress={onPress}>
        <View style={styles.movie}>
        <View style={styles.playbutton}>
            <View style={styles.playicon}><Image style={{width:35, height:35, marginLeft:4}}source={require('../assets/play-button-arrowhead.png')} /></View>
            </View>
            <Image source={{uri:props.img}} resizeMode="cover" style={styles.imageback}>
            </Image>
            <View style={styles.progwrapper}>
                <View style={styles.prog}></View>
            </View>
            <View style={styles.morewrapper}>
            <View style={styles.more}>
                <Icon name="info" type="feather" color="#fff"/>
                <Icon name="more-vertical" type="feather" color="#fff"/>
                </View>
                </View></View>
            </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    movie :{
    width:112,
    borderRadius:5,
    backgroundColor:"#303030",
    position:"relative"
    },
    movietitle:{
        color:"#fff"
    },
    more:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingBlock:5,
        paddingInline:10,
        position:"relative"
    },
    morewrapper:{
        
    },
    progwrapper:{
        flex:1,
        height:4,
        backgroundColor:"#202020"
    },
    prog:{
        position:"absolute",
        top:0,
        bottom:0,
        left:0,
        width:"65%",
        backgroundColor:"red"
    },
    playbutton:{
        position:"absolute",
       left:0,
       right:0,
       top:0,
       bottom:30,
       flex:1,
       flexDirection:"column",
       justifyContent:"center",
       alignItems:"center",
       zIndex:2
    },
    playicon:{
        width:70,
        height:70,
        borderRadius:100,
        borderWidth:1,
        borderColor:"#ffffff",
        backgroundColor:"#000000",
        opacity:0.7,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    imageback:{
        width:112,
        height:160,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    }
});

export default Movie;
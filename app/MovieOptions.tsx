import React from "react"
import {View, Text, StyleSheet, ImageBackground, Image, TouchableNativeFeedback, TouchableHighlight} from "react-native"
import {Icon} from "react-native-elements"

type MovieProps = {
    title: string;
    img: string
}

const Movie = (props: MovieProps) => {
    const onPress = () => {alert(props.title)}
    return(
        <TouchableHighlight onPress={onPress}>
        <View style={styles.movie}>
        <View style={styles.playbutton}><Icon name="play-circle" type="feather" color="#fff" size={50}/></View>
            <Image source={{uri:props.img}} resizeMode="cover" style={styles.imageback}>
            </Image>
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
    playbutton:{
        position:"absolute",
       left:0,
       right:0,
       top:0,
       bottom:30,
       flex:1,
       flexDirection:"column",
       justifyContent:"center",
        zIndex:2
    },
    imageback:{
       
        width:112,
        height:160,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    }
});

export default Movie;
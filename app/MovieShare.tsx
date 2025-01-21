import React from "react"
import {View, Text, StyleSheet, ImageBackground, Image, TouchableNativeFeedback, TouchableHighlight} from "react-native"
import {Icon} from "react-native-elements"
import showAlert from './utils/showAlert';

type MovieProps = {
    title: string;
    img: string
}

const MovieShare = (props: MovieProps) => {
    
    const onPress = () => {
        showAlert(props.title, 'Netflix', [
          { text: 'Cancel', style: 'cancel' },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    }

    return(
        <TouchableHighlight onPress={onPress}>
        <View style={styles.movie}>
       
            <Image source={{uri:props.img}} resizeMode="cover" style={styles.imageback}>
            </Image>
            <View style={styles.morewrapper}>
            <View style={styles.more}>
                <Icon name="send" type="feather" color="#fff" size={15}/>
                <Text style={{color:"#ffffff"}}>Share</Text>
                </View>
                </View></View>
            </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    movie :{
    width:112,
    borderRadius:5,
    backgroundColor:"#151515",
    position:"relative"
    },
    movietitle:{
        color:"#fff"
    },
    more:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingBlock:15,
        paddingInline:10,
        gap:7,
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

export default MovieShare;
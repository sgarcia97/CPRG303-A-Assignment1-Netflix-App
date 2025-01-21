import React from "react"
import {View, StyleSheet, Image, Text, ImageBackground, TouchableHighlight} from "react-native"
import showAlert from './utils/showAlert';


type MovieProps = {
    title: string;
    img: string;
    category: string;
}

const Game = (props: MovieProps) => {

    const onPress = () => {
        showAlert(props.title, 'Netflix Games', [
          { text: 'Cancel', style: 'cancel' },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    };

    return(
        <TouchableHighlight onPress={onPress}>
            <View style={styles.movie}>
            <Image source={{uri:props.img}} resizeMode="cover" style={styles.imageback}></Image>
                <View style={styles.overlayborder}></View>
                <View>
                    <Text style={{fontWeight:600, color:"#fff"}}>{props.title}</Text>
                    <Text style={{color:"#bababa"}}>{props.category}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    movie :{
        position:"relative",
    width:112,
    borderRadius:5,
  
    },
    movietitle:{
        color:"#fff"
    },
    imageback:{
        position:"relative",
        height:112,
        width:112,
        borderRadius:24,
       
    },
    overlayborder:{
        position:"absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        borderRadius:24,
        borderWidth:1,
        borderColor:"#fff",
        opacity:0.1
    }
});

export default Game;
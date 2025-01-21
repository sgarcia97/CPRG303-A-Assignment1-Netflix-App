import React from "react"
import {View, StyleSheet, Image, ImageBackground, TouchableHighlight} from "react-native"
import showAlert from './utils/showAlert';


type MovieProps = {
    title: string;
    img: string;
}

const Game = (props: MovieProps) => {

    const onPress = () => {
        showAlert(props.title, 'Alert Button pressed', [
          { text: 'Cancel', style: 'cancel' },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    };
    let im:string = (props.img as unknown) as string
    return(
        <TouchableHighlight onPress={onPress}>
            <View style={styles.movie}>
                <Image source={{uri:'../assets/dead_cells_appicon_en.png'}} resizeMode="cover" style={styles.imageback}></Image>
                <View style={styles.overlayborder}></View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    movie :{
        height:112,
    width:112,
    borderRadius:5,
  
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
        borderRadius:24,
        width:112,
        height:112
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
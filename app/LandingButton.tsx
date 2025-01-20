import React from "react"
import {View, Text, StyleSheet, TouchableHighlight} from "react-native"
import {Icon} from "react-native-elements"

type ButtonProp = {
    title: string;
    icon: string;
    type: string;
}

const LandingButton = (props: ButtonProp) => {
    return(
       
            <TouchableHighlight style={{flex:1}} onPress={()=>{alert(props.title)}}>
                <View style={styles.button} ><Icon name={props.icon} type={props.type}/><Text style={styles.buttontext}>{props.title}</Text></View>
            </TouchableHighlight>   
    )
}

export default LandingButton

const styles = StyleSheet.create({
    button:{
        position:"relative",
        borderRadius: 5,
        paddingInline:15,
        paddingBlock:8,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:10,
        flex:1,
        backgroundColor:"#ffffff",
    },
    buttontext:{
        color:"#000",
        fontSize:15,
        fontWeight:600
    }
})

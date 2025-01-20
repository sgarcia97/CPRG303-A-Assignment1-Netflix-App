import React from "react"
import { BlurView } from "expo-blur"
import {View, Text, StyleSheet, TouchableHighlight} from "react-native"
import { Icon } from "react-native-elements"
import Filters from "./Filters"

type Head = {
    user : string;
    filters: boolean;
}

const Header = (props:Head) => {
    return(
        <BlurView intensity={100} tint="dark" style={styles.filterwrapper}>
            <View style={styles.headwrapper}>
            <Text style={styles.headertext}>{props.user}</Text>
            <View style={styles.headerbuttons}>
                <TouchableHighlight><Icon onPress={()=>{alert("test")}} name="cast" type="feather" color="#ffffff" size={25}/></TouchableHighlight>
                <TouchableHighlight><Icon onPress={()=>{alert("test")}} name="download" type="feather" color="#ffffff" size={25}/></TouchableHighlight>
                <TouchableHighlight><Icon onPress={()=>{alert("test")}} name="search" type="feather" color="#ffffff" size={25}/></TouchableHighlight>
            </View>
            </View>
            { props.filters ? <Filters/> : ''}
        </BlurView>
    )
}

export default Header

const styles = StyleSheet.create({
    imagebutton:{
        width:30,
        height:30,
        backgroundColor:"#505050"  
    },
    headerbuttons:{
        position:"relative",
        flexDirection:"row",
        gap:20
    },
    headertext:{
        color:"#ffffff",
        fontSize:25,
        fontWeight:"bold"
    },
    filterwrapper:{
        position:"relative",
        flex:1,
        flexDirection:"column",
        flexWrap:"nowrap",
        gap:20,
        paddingTop:70,
        paddingInline:20,
        paddingBottom:20,
      
        
    },
    headwrapper:{
        position:"relative",
        flex:1,
        flexDirection:"row",
        flexWrap:"nowrap",
        justifyContent:"space-between",
        alignItems:"center",
        gap:20,
        
      
        
    }
})

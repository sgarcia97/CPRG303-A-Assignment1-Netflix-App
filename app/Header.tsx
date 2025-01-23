import React from "react"
import { BlurView } from "expo-blur"
import {View, Text, StyleSheet, TouchableHighlight, Platform} from "react-native"
import { Icon } from "react-native-elements"
import Filters from "./Filters"

type Head = {
    user : string;
    filters: boolean;
}
// Default Sticky header for pages 
const Header = (props:Head) => {
    
    return(
        <BlurView intensity={100} tint="dark" style={styles.filterwrapper}>
            <View style={styles.headertint}></View>
            <View style={styles.headwrapper}>
            <Text style={styles.headertext}>{props.user}</Text>
            <View style={styles.headerbuttons}>
                <TouchableHighlight><Icon onPress={()=>{alert("Cast to your device")}} name="cast" type="feather" color="#ffffff" size={25}/></TouchableHighlight>
                <TouchableHighlight><Icon onPress={()=>{alert("Your Downloads")}} name="download" type="feather" color="#ffffff" size={25}/></TouchableHighlight>
                <TouchableHighlight><Icon onPress={()=>{alert("Search Movies and TV Shows")}} name="search" type="feather" color="#ffffff" size={25}/></TouchableHighlight>
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
        ...Platform.select({
            android: {
                paddingTop:10,
                backgroundColor:"#000000"
            },
            ios:{
                paddingTop:50,
            }
        }),
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
    },
    headertint:{
        ...Platform.select({
            android:{
                position:"absolute",
                top:0,
                bottom:0,
                left:0,
                right:0,
                backgroundColor:"#000"
            }
        })
    }
})

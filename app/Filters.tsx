import React from "react"
import {View, Text, StyleSheet} from "react-native"
import {Icon} from "react-native-elements"

const Filters = () => {
    return(
        <View style={styles.filterwrapper}>
            <View style={styles.button}><Text style={styles.buttontext}>TV Shows</Text></View>
            <View style={styles.button} ><Text style={styles.buttontext}>Movies</Text></View>
            <View style={styles.button} ><Text style={styles.buttontext}>Categories</Text><Icon name="chevron-down" type="feather" size={20} color="#ffffff"/></View>
        </View>
    )
}

export default Filters

const styles = StyleSheet.create({
    button:{
        borderColor:"#ffffff",
        borderWidth:1,
        borderRadius: 100,
        paddingInline:16,
        paddingBlock:5,
        flexDirection:"row",
        alignItems:"center",
        gap:5,
        opacity:0.7

        
    },
    buttontext:{
        color:"#fff",
        fontSize:12,
        fontWeight:600
    },
    filterwrapper:{
        flex:1,
        flexDirection:"row",
        gap:10,
        paddingBlock:20
    }
})

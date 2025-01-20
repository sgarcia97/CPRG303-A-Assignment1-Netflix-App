import React from "react"
import {View, Text, StyleSheet} from "react-native"
import {Icon} from "react-native-elements"

type Mylist = {
    title: string;
}

const MyList = (props : Mylist) => {
    return(
        <View style={styles.wrapper}>
            <Text style={{color:"#fff", fontSize:18}}>{props.title}</Text><Icon name="chevron-right" type="feather" size={21} color="#fff"/>
        </View>
    )
}

export default MyList

const styles = StyleSheet.create({
    wrapper:{
        position:"relative",
        flexDirection:"row",
        alignItems:"center",
        gap:4,
    }
})

import React from "react"
import {View,ScrollView,Text,StyleSheet,FlatList} from "react-native"

import GameData from "./gamedata.json"
import MyList from "./MyList"
import Game from "./Game"
type Games = {
    subtitle: string;
    mylist: boolean;
    mylisttitle: string;
}
const GameSection = (props: Games) => {
    return(
        <View style={{flex:1}}>
            <View style={styles.subtitlewrapper}><Text style={styles.subtitle}>{props.subtitle}</Text>{props.mylist ? <MyList title={props.mylisttitle}/> : ""}</View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.hcontainer}>
                    {
                        GameData.map(d=>{
                          
                            return(
                                
                            <Game key={d.id} title={d.title} img={d.img} category={d.category}/>
                            )
                            
                        })
                    }
               </View>
            </ScrollView>
        </View>
    )
}

export default GameSection;

const styles = StyleSheet.create({
    subtitle : {
        color:"#fff",
        fontSize:18,
        fontWeight:700,
        paddingInline:8,
        
    },
    subtitlewrapper:{
        flex:1,
        paddingBottom:10,
        paddingTop:20,
        flexDirection:"row",
        flexWrap:"nowrap",
        alignItems:"center",
        justifyContent:"space-between",
        position:"relative"
    },
    hcontainer: {
        flex:1,
        flexDirection:"row",
        flexWrap:"nowrap",
        gap:8,
        paddingInline:8
      },
})
import React from "react"
import {View,ScrollView,Text,StyleSheet,FlatList} from "react-native"
import Movie from "./Movie"
import MovieBig from "./MovieBig"
import MovieOptions from "./MovieOptions"
import MovieShare from "./MovieShare"
import MovieCountdown from "./MovieCountdown"
import Data from "./data.json"
import MyList from "./MyList"


const MovieSection = (props) => {
 if(props.mylist){

 }
    return(
        <View style={{flex:1}}>
            <View style={styles.subtitlewrapper}><Text style={styles.subtitle}>{props.subtitle}</Text>{props.mylist ? <MyList title={props.mylisttitle}/> : ""}</View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.hcontainer}>
                    {
                        props.movies.map(d=>{
                            if(props.moviesize == "small") {
                            return(
                                
                            <Movie key={d.id} title={d.title} img={d.img} stat={d.statmsg}/>
                            )
                            } else if (props.moviesize == "big") {
                                return(<MovieBig key={d.id} title={d.title} img={d.img} stat={d.statmsg}/>)
                            } else if (props.moviesize == "opt") {
                                return(<MovieOptions key={d.id} title={d.title} img={d.img}/>)
                            }else if (props.moviesize == "share") {
                                return(<MovieShare key={d.id} title={d.title} img={d.img}/>)
                            }else if (props.moviesize == "countdown") {
                                return(<MovieCountdown key={d.id} title={d.title} img={d.img} count={d.count}/>)
                            }
                            
                        })
                    }
               </View>
            </ScrollView>
        </View>
    )
}

export default MovieSection;

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
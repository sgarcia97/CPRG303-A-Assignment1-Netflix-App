import React from "react"
import {View,ScrollView,Text,StyleSheet,FlatList} from "react-native"
import Movie from "./Movie"
import MovieBig from "./MovieBig"
import MovieOptions from "./MovieOptions"
import Data from "./data.json"


const MovieSection = (props) => {
 console.log(Data)
    return(
        <View>
            <Text style={styles.subtitle}>{props.subtitle}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
             <View style={styles.hcontainer}>
                    {
                        Data.map(d=>{
                            if(props.moviesize == "small"){
                            return(
                                
                            <Movie key={d.id} title={d.title} img={d.img}/>
                            )
                            }else if(props.moviesize == "big"){
                                return(<MovieBig key={d.id} title={d.title} img={d.img}/>)
                            }
                            else if(props.moviesize == "opt"){
                                return(<MovieOptions key={d.id} title={d.title} img={d.img}/>)
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
        paddingBottom:10,
        paddingTop:20,
        paddingInline:8
    },
    hcontainer: {
        flex:1,
        flexDirection:"row",
        flexWrap:"nowrap",
        gap:8,
        paddingInline:8
      },
})
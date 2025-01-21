import React from "react"
import { StyleSheet, Text, View, ScrollView, Image, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {BlurView} from 'expo-blur'
import MovieSection from "./MovieSection"
import GameSection from "./GameSection"
import Filters from "./Filters"
import Data from "./data.json"
import Data1 from "./data1.json"
import Data2 from "./data2.json"
import Data3 from "./data3.json"
import Data4 from "./data2.json"
import CountData from "./countdown.json"
import Header from './Header'
import LandingButton from './LandingButton'
import LinearGradient from "react-native-linear-gradient";

const HomeScreen = () => {

    const navigation = useNavigation();
    const shuffleData = (a:any) => {
        let n = Data.length, r, temp, b;
        while(n > 1){
            r = Math.floor(n* Math.random());
            n -= 1;
            temp = Data[n];
            a[n] = a[r];
            a[r] = temp;
        }
        b = a
        return b;
    }

    const newData = shuffleData(Data4);
    const newData1 = shuffleData(Data);
    let imgg: string = 'https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaAjh2jshEy1jjYTgwnTruzPOUtn7iDI1X3K32f13dAeSd-uIhZdz3Jl_wOgp1v7J_vLVQ4rx0PFPedlWyFu2obLAnstM8Y_zvKYTcnnRYJDDnJ6J1K681aD4U5Xvxw1j1jpzw.jpg?r=c11&quot;';

      return (
    <ScrollView style={styles.safearea} stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
  
      <Header user="For Group 4" filters={true}/>
      <View style={styles.section}>
        
        <BlurView tint="dark" intensity={100} style={{flex:1,position:"relative", paddingInline:20, paddingBottom:20}} >
            <View style={styles.headertint}></View>
        <View style={styles.landing}>
          <Image style={styles.imageback} source={{uri:imgg}}></Image>
          <View style={styles.imagetint}></View>
          <View style={styles.landingfooter}>
            <Text style={styles.landingdesc}>Action <Text style={styles.mdot}>{'\u2022'}</Text> Adventure <Text style={styles.mdot}>{'\u2022'}</Text> Comedy <Text style={styles.mdot}>{'\u2022'}</Text> Thrill-ride</Text>
            <View style={styles.buttonwrapper}>
              <LandingButton title="Play" icon="play" type="font-awesome"/>
              <LandingButton title="My List" icon="plus" type="feather"/>
            </View>
          </View>
        </View>
        </BlurView>
      </View>
      
      <View style={styles.mainsection}>
        <GameSection subtitle="Mobile Games" movies={Data} moviesize="game" mylist={true} mylisttitle="My List"/>
        <MovieSection subtitle="Continue Watching for Group 4" movies={Data} moviesize="opt" />
        <MovieSection subtitle="Because you watched Squid Game" movies={Data1} moviesize="small"/>
        <MovieSection subtitle="Today's Top Picks for You" movies={Data2} moviesize="small"/>
        <MovieSection subtitle="Critically Acclaimed Movies" movies={Data3} moviesize="small"/>
        <MovieSection subtitle="Only on Netflix" movies={Data} moviesize="big"/>
        <MovieSection subtitle="Blockbuster Movies" movies={Data1} moviesize="small"/>
        <MovieSection subtitle="Top 10 In Canada" movies={CountData} moviesize="countdown"/>
        <MovieSection subtitle="Your Next Watch" movies={Data2} moviesize="small"/>
        <MovieSection subtitle="My List" movies={Data3} moviesize="small"/>
    
      </View>
      <View style={styles.spacer}></View>
    </ScrollView>
      
    
    
      );
}

export default HomeScreen;

const styles = StyleSheet.create({
    safearea:{
      flex:1,
      backgroundColor:"#000"
    },
    spacer:{
      ...Platform.select({
        android:{
          height:120
        },
        ios:{
          height:160
        }
      })
        
      },
    container: {
      flex: 1,
      gap:10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:10
    },
    imageback:{
      position:"absolute",
      top:0,
      bottom:0,
      left:0,
      right:0,
      borderRadius:10
  },
  mdot:{
    color:"red"
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
      },
  imagetint:{
    position:"absolute",
    top:0,
    bottom:0,
    left:0,
    right:0,
    backgroundColor:"#000000",
    opacity:0.2,
    borderColor:"#eaeaea",
    borderWidth:1,
    borderRadius:10
  },
    landing:{
      height:540,
      backgroundColor:"#303030",
      borderRadius:10,
    },
    landingfooter:{
      position:"absolute",
      flex:1,
      bottom:0,
      left:0,
      right:0,
      padding:2,
    },
    landingdesc:{
      color: "#fff",
      textAlign:"center",
      flex:1
    },
    buttonwrapper:{
    flex:1,
      flexDirection:"row",
      gap:15,
      padding:10
    },
    section:{
      flex: 1,
      
    },
    mainsection:{
      flex: 1,
      paddingInline:0
    },
    title: {
      fontSize:30,
      fontWeight:"bold",
      color:"#fff"
    },
    subtitle:{
      color:"#fff"
    },
    paragraph: {
      textAlign:"center",
      color:"#fff"
    },
    button: {
      backgroundColor:"green",
      color:"white",
      paddingInline:30,
      paddingBlock:10,
      borderRadius:10
    },
    buttontext: {
      color:"white"
    }
  });
  
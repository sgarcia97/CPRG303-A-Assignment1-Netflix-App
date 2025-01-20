import React from "react"
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Icon} from "react-native-elements"
import MovieSection from "./MovieSection"
import Filters from "./Filters"
import Data from "./data.json"
import Header from './Header'
import LandingButton from './LandingButton'


const ProfileScreen = () => {

  const navigation = useNavigation();
      
      type Person = {
        name: string;
        age: number;
        isStudent?: boolean; //The ? mark means it is optional 
        height: number;
        //vac: vacationDest
      }
    
      interface Person2 {
        name: string; 
        age: number;
        isStudent: boolean;
        height: number;
      }
    
      const data: Person ={
        name: "Jane Paul",
        age: 25,
        isStudent : true,
        height: 5.11,
        //vac: vacationDest("Canada")
      }
    
      const data2: Person2 ={
        name: "Peter Parker",
        age: 43,
        isStudent : true,
        height: 6.2,
      }
    
      const datalist = [data, data2];
    
      console.log(datalist[0].name);
    
    const name : string = "John Doe";
    let count : number = 2;
    let occupation: string = "Software Developer";
     let imgg: string = 'https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaAjh2jshEy1jjYTgwnTruzPOUtn7iDI1X3K32f13dAeSd-uIhZdz3Jl_wOgp1v7J_vLVQ4rx0PFPedlWyFu2obLAnstM8Y_zvKYTcnnRYJDDnJ6J1K681aD4U5Xvxw1j1jpzw.jpg?r=c11&quot;';
      return (
    
        <SafeAreaView style={styles.safearea}>
          <ScrollView>
       <View style={styles.section}>
        <Header user="My Netflix"/>
      
       
        </View>
        <View style={styles.mainsection}>
          <MovieSection subtitle="Continue Watching for Group 4" movies={Data} moviesize="opt"/>
          <MovieSection subtitle="Because you watched Squid Game" movies={Data} moviesize="small"/>
          <MovieSection subtitle="Today's Top Picks for You" movies={Data} moviesize="small"/>
          <MovieSection subtitle="Critically Acclaimed Movies" movies={Data} moviesize="small"/>
          <MovieSection subtitle="Only on Netflix" movies={Data} moviesize="big"/>
          <MovieSection subtitle="Blockbuster Movies" movies={Data} moviesize="small"/>
          <MovieSection subtitle="Relentless Crime Thrillers" movies={Data} moviesize="small"/>
          <MovieSection subtitle="Your Next Watch" movies={Data} moviesize="small"/>
          <MovieSection subtitle="My List" movies={Data} moviesize="small"/>
    
     </View>
     </ScrollView>
        </SafeAreaView>
    
    
      );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    safearea:{
      flex:1,
      backgroundColor:"#000"
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
      paddingInline:20
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
  
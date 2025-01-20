import React from "react"
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, StatusBar, StatusBarStyle } from "react-native";
import {BlurView} from "expo-blur"
import { createStaticNavigation, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from "react-native-elements"
import MovieSection from "./app/MovieSection"
import Filters from "./app/Filters"
import Data from "./app/data.json"
import Header from "./app/Header"
import ProfileScreen from "./app/ProfileScreen";
import HomeScreen from "./app/HomeScreen";
import New from "./app/New";
//import { StatusBar } from "expo-status-bar";

/*
const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: HomeScreen,
      options: {

      }
    },
    Profile: {
      screen: ProfileScreen,
      options: {

      }
    },
    New : {
      screen: New,
      options: {

      }
    }
    }
});
*/

const MyTabs = createBottomTabNavigator({
  screenOptions: ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      console.log(color);
      let iconName = "";
      let ic;
      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home';
        ic = <Icon name={iconName} size={size} color={color} type="feather" />
      } else if(route.name === 'New & Hot'){
        iconName = focused ? 'play' : 'play';
        ic = <Icon name={iconName} size={size} color={color} type="feather" />
      } else if (route.name === 'Profile') {
        iconName = focused ? 'square' : 'square';
        ic = <Image
        style={{width:22, height:22}}
        source={{
          uri: 'https://occ-0-7324-1009.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229',
        }}
      />
      }

      // You can return any component that you like here!
      return ic;
    },
    tabBarActiveTintColor: '#ffffff',
    tabBarInactiveTintColor: '#909090',
    tabBarStyle: { position: 'absolute', borderTopWidth:0 },
    tabBarBackground: () => (
      <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
    )
  }),
  screens:{
    Home:{
      screen:HomeScreen,
      options:{
        headerShown:false
      }
    },
    'New & Hot':{
      screen: New,
      options:{
        headerShown:false
      }
    },
    Profile: {
      screen:ProfileScreen,
      options:{
        headerShown:false
      }
    }
  }
  })
const Navigation = createStaticNavigation(MyTabs);

export default function App() {

  return <><StatusBar/><Navigation /></>
}


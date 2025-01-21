import React from "react"
import { StyleSheet, Image, StatusBar, Platform, View } from "react-native";
import {BlurView} from "expo-blur"
import { createStaticNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from "react-native-elements"
import ProfileScreen from "./app/ProfileScreen";
import HomeScreen from "./app/HomeScreen";
import New from "./app/New";

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
      <BlurView tint="dark" intensity={100} style={styles.tabbar} ><View style={styles.tabtint}></View></BlurView>
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

const styles = StyleSheet.create({
  tabbar:{
    ...StyleSheet.absoluteFillObject,
    ...Platform.select({
      android:{
        backgroundColor:"#000000",
        opacity:1
      },
      ios:{
        
      }
    }),
  },
  tabtint:{
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


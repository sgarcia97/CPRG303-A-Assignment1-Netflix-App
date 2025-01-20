import React from "react"
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MovieSection from "./MovieSection"
import Data from "./data.json"
import Header from './Header'
import Feather from 'react-native-vector-icons/Feather';
import NotifItem from "./NotifItem";

//sample json for notifications
const notifications = [
  {
    line1: "Don't miss out",
    line2: "Experience more Dexter",
    line3: "Dec. 28",
    imageSource: require('../assets/notif1.png'),
  },
  {
    line1: "Rewatch your favorite moments",
    line2: "See what you've watched",
    line3: "Dec. 20",
    imageSource: require('../assets/notif2.png'),
  },
];


const ProfileScreen = () => {

  const navigation = useNavigation();  
    return (
    
      <ScrollView style={styles.safearea} stickyHeaderIndices={[0]} onScroll={() => {}} showsVerticalScrollIndicator={false}>
      <Header user="My Netflix" filters={false}/>
          
            <View style={styles.profileSection}>
              <Image 
                source={require('../assets/profile.png')}
                style={styles.profileImage}
              />
              <View style={styles.profileTextGroup}>
                <Text style={styles.profileText}>Group 4</Text>
                <Feather name="chevron-down" size={30} color="white" />
              </View>
              {/* Notification */}
              <View style={styles.profileSub}>
                <View style={styles.iconContainer1}>
                  <Feather name="bell" size={24} color="white" />
                </View>
                <Text style={styles.profileSubText}>Notifications</Text>
                <View style={styles.iconContainer2}>
                  <Feather name="chevron-right" size={22} color="white" />
                </View>
              </View>
              {/* notification items */}
              <View style={styles.notifItemContainer}>
                {notifications.map((notif, index) => (
                  <NotifItem
                  key={index}
                  line1 = {notif.line1}
                  line2 = {notif.line2}
                  line3 = {notif.line3}
                  imageSource={notif.imageSource}
                />
                )
              )} 
              </View>
              
              {/* Downloads */}
              <View style={styles.profileSub}>
                <View style={styles.iconContainer3}>
                  <Feather name="download" size={24} color="white" />
                </View>
                <Text style={styles.profileSubText}>Downloads</Text>
                <View style={styles.iconContainer2}>
                  <Feather name="chevron-right" size={22} color="white" />
                </View>
                
              </View>
              
            </View>
            <View style={styles.mainsection}>
              <MovieSection subtitle="TV Shows & Movies You've Liked" movies={Data} moviesize="share" mylist={true} mylisttitle="See All"/>
              <MovieSection subtitle="My List" movies={Data} moviesize="small"/>
            </View>
            <View style={styles.spacer}></View>
          </ScrollView>
  
      );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    safearea:{
      position:"relative",
      flex:1,
      backgroundColor:"#000",
      
    },
    spacer:{
      height:160
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
    },
    profileSection: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center', 
    },
    profileText: {
      color: "white",
      fontSize: 20,
      fontWeight:700
    },
    profileImage: {
      height: 80,
      width: 80,
      backgroundColor: "white",
      marginTop: 20,
      marginBottom: 5,
      borderRadius:10
    },
    profileTextGroup: {
      flex: 1,
      flexDirection: 'row'
    },
    iconContainer1: {
      backgroundColor: 'red', 
      borderRadius: 25, 
      padding: 10, 
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 5
    },
    iconContainer2: {
      marginLeft: 'auto'
    },
    iconContainer3: {
      backgroundColor: '#4969E4', 
      borderRadius: 25, 
      padding: 10, 
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 5
    },
    profileSub: {
      width: '100%',
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: 3,
    },
    profileSubText: {
      color: "white",
      fontWeight: 700,
      fontSize: 16,
      marginHorizontal: 5
    },
    notifItemContainer: {
      backgroundColor: "black",
      width: "100%",
    }
  });
  
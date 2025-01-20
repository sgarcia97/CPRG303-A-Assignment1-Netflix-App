import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface NotifItemProps {
  line1: string;  // Line 1 - bold 
  line2: string;  // Line 2 - just text
  line3: string;  // Line 3 - should be date
  imageSource: ImageSourcePropType; //img prop
}

const NotifItem: React.FC<NotifItemProps> = ({ line1, line2, line3, imageSource }) => {
  return (
    <View style={styles.container}>
      {/* Red Dot bullet */}
      <View style={styles.bulletPoint} />

      {/* Notification Box top container */}
      <View style={styles.textContainer}>
        {/* Image Box */}
        <Image source={imageSource} style={styles.imageBox} />

        {/* 3 lines of text */}
        <View style={styles.textWrapper}>
          <Text style={styles.textLineTop}>{line1}</Text>
          <Text style={styles.textLine}>{line2}</Text>
          <Text style={styles.textLine}>{line3}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10,
  },
  bulletPoint: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    flexDirection: 'column', 
  },
  textLine: {
    color: 'white', 
    fontSize: 10,
    marginBottom: 1, 
    fontWeight: 200
  },
  textLineTop: {
    color: "white",
    fontWeight: "700",
    fontSize: 12,
    marginBottom: 1,
  },
  imageBox: {
    height: 60, 
    width: 120,
    backgroundColor: 'transparent', 
    marginRight: 10,
  }
});

export default NotifItem;

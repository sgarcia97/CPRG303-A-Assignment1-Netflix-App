import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface NotifItemProps {
  line1: string;  // Line 1 - bold 
  line2: string;  // Line 2
  line3: string;  // Line 3
}

const NotifItem: React.FC<NotifItemProps> = ({ line1, line2, line3 }) => {
  return (
    <View style={styles.container}>
      {/* Red Dot bullet */}
      <View style={styles.bulletPoint} />

      {/* Notification Box with Yellow Box */}
      <View style={styles.textContainer}>
        <View style={styles.yellowBox}></View>

        {/* Text Lines */}
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
  yellowBox: {
    height: 60,
    width: 120,
    backgroundColor: 'yellow',
    marginRight: 10,
  },
  textWrapper: {
    flexDirection: 'column', 
  },
  textLine: {
    color: 'white', 
    fontSize: 12,
    marginBottom: 1, 
  },
  textLineTop: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 1,
  }
});

export default NotifItem;

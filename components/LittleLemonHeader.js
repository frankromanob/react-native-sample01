import * as React from 'react';
import { View, Image,Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.head}>
      <Text
        style={styles.headtext}>
        Little Lemon
      </Text>
      <Image
        style={styles.logo} 
        source={require('../img/littlelemonLogo.png')}
        resizeMode= 'contain' 
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}/>
    </View>
  );
}

const styles= StyleSheet.create({
    head:{
        backgroundColor:'#EE9972'
    },
    headtext:{
        padding: 40,
          fontSize: 30,
          color: '#333333',
          textAlign: 'center',
    },
    logo:{
      width:400,
      height:100,
    }
})
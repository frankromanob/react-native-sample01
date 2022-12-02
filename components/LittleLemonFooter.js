import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View >
      <Text style={styles.footText}>
        Todos los derechos reservados por Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}

const styles=StyleSheet.create({
    footText:{
        fontSize: 16,
        color: '#333333',
        backgroundColor:'#EE9972',
        textAlign: 'center',
        alignItems:'center',
        fontStyle:'italic'
    }
})
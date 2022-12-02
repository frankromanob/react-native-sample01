import React, {useState} from 'react';
import {  Text, StyleSheet, ScrollView, Pressable } from 'react-native';

const WelcomeScreen =({ navigation }) => {
    return (
  
      <ScrollView style={styles.scroll}
          indicatorStyle={"white"} > 
            <Text
                style={styles.welcome}>
                Welcome to Little Lemon
            </Text>
            <Text
                style={styles.welcomebody}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear more about your experience with us!
            </Text>
            <Pressable  style={styles.buttonLogin} 
                onPress={() => {navigation.navigate('Menu'); }}> 
                <Text style={styles.buttonText}> View Menu </Text> 
            </Pressable>
      </ScrollView>  
  );
}


const styles=StyleSheet.create({
    welcome:{
        padding: 40,
        fontSize: 40,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    welcomebody: {
        fontSize: 25,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        fontFamily:'Roboto'
    },
    scroll:{
        flex: 1,
        backgroundColor:'#495E57',
    },
    buttonLogin: {
        color: '#EDEFEE',
        fontSize: 10,
        backgroundColor: '#EDEFEE',
        borderColor: '#495E57',
        borderWidth: 2,
        borderRadius: 12,
        }, 
       buttonText: {
        color: '#495E57',
        textAlign: 'center',
        fontSize: 32,
       },
})

export default WelcomeScreen
import React,{useState} from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Alert, Pressable} from 'react-native';

const LoginScreen=({navigation})=> {
  const [userName, onChangeUserName] = useState('');  
  const [password, onChangePassword] = useState('');  
  const [isLogged, setIsLogged] = useState(false);
  return (
    <ScrollView style={styles.container} keyboardDismissMode='on-drag'>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>

      <TextInput
            style={styles.input}
            value={userName}
            onChangeText={onChangeUserName}
            placeholder={'Username'}
            keyboardType={'email-address'} 
            maxLength={20}
        />
        <TextInput
            style={styles.input}
            value={password}
            onChangeText={onChangePassword}
            placeholder={'Password'}
            secureTextEntry={true}
            onFocus={() => {Alert.alert('Password is focussed')}}
        />
         <Pressable  style={styles.buttonLogin} 
            onPress={() => { 
                            setIsLogged(!isLogged);
                            navigation.navigate('Welcome');
                            }}> 
            <Text style={styles.buttonText}> Log in </Text> 
        </Pressable>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#000',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#000',
    textAlign: 'center',
  },
  input: { 
    height: 40, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 16, 
    borderColor: 'EDEFEE', 
    backgroundColor: '#EE9972', 
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
});

export default LoginScreen
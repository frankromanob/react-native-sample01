import { StatusBar }  from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable , useColorScheme} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Local Imports
import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonHeader from './components/LittleLemonHeader';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import FeedBackForm from './components/FeedBackForm';
import LoginScreen from './components/LoginScreen';


export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const colorScheme = useColorScheme();
  const Stack = createNativeStackNavigator();

  return (
    <>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="login" 
                         screenOptions={ {headerStyle: {backgroundColor: '#FBDABB'},
                                          headerTitleAlign: 'center'} }>
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Menu" component={MenuItems} />
        </Stack.Navigator>
    </NavigationContainer>
    </> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#EE9972'
  },
  container2: {
    flex: 1,
    backgroundColor:'#495E57'
  },
  header: {
    backgroundColor: '#495E57',
  },
  body:{
    flex:0.10,
    backgroundColor:'#EE9972'
  },
  footerContainer: { backgroundColor: '#333333' },
  button: {
    color: '#EDEFEE',
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: '#EDEFEE',
    borderColor: '#495E57',
    borderWidth: 2,
    borderRadius: 12
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
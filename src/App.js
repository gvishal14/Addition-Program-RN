import { Button, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Login from './Login';

const Stack = createNativeStackNavigator();
const App = () => {
  return (<NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerStyle:{
      backgroundColor:'blue',
    },
    headerTintColor:'yellow',
      headerTitleStyle:{
        fontSize:25
      }
      }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Login' component={Login} />

    </Stack.Navigator>

    </NavigationContainer>)
};

export default App
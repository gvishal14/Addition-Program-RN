import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React,{useState} from 'react'
import Login from './Login';

export default function Home({navigation}) {
    
    const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
// const [result, setResult] = useState('');

const handleAddition=()=>{
    const result= parseInt(number1)+parseInt(number2)
    navigation.navigate('Login', { result });
}

  return(
  
  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Text style={{fontSize: 30}}>User Screen</Text>
    <Text>Enter two numbers to add:</Text>
      <TextInput
        style={{ borderWidth: 1, margin: 5, padding: 5 }}
        keyboardType="numeric"
        placeholder="Enter first number"
        value={number1}
        onChangeText={(text) => setNumber1(text)}
      />
       <TextInput
        style={{ borderWidth: 1, margin: 5, padding: 5 }}
        keyboardType="numeric"
        placeholder="Enter second number"
        value={number2}
        onChangeText={(text) => setNumber2(text)}
      />
    <Button title='On Addition' onPress={handleAddition} />
  </View>)
}

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'


export default function Login({route}) {

    const {result} =route.params
   
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
     <Text style={{fontSize: 30, color:'black'}} >Result: {result}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
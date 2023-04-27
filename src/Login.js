import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'


export default function Login({route}) {

    const {result} =route.params
   
  return (
    <View>
     <Text>Result: {result}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
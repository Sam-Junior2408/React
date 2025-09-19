import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import {Colors} from '../constants/Colors'
const RootLayout = () => {
    const colorTheme = useColorScheme()
    const theme = Colors[colorTheme] ?? Colors.light
  return (
    
        <Stack screenOptions={{
            headerStyle: {backgroundColor: theme.navBackground},
            headerTintColor: theme.title
        }}
        >
            <Stack.Screen name="index" options={{headerTitle: 'Home'}} />  
            <Stack.Screen name="about" options={{headerTitle: 'About'}} />
            <Stack.Screen name="contact" options={{headerTitle: 'Contact', headerShown:true}} />
        </Stack>
      
  )
}

export default RootLayout

const styles = StyleSheet.create({})
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Webshop from './spotify/Webshop'
import { NavigationContainer } from '@react-navigation/native'
import FooterControls from './spotify/FooterControls';

export default function App() {
  return (
    <View style={styles.container}>

      <FooterControls></FooterControls>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

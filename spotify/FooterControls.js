import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import IconButton from './IconButton'
import { NavigationContainer } from '@react-navigation/native'
import Login from './Login'
import CreatePosting from './CreatePosting'
import Webshop from './Webshop'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from 'react-native-vector-icons';
import {StatusBar} from 'expo-status-bar'

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    
  }
})

export default class FooterControls extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      
    }
  }




  render() {
  return (
<View style={styles.container}>
  <StatusBar style="light"/>
    <NavigationContainer> 
        <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'darkred',
              style: {
                    backgroundColor: '#000000',
                    
              }
       }}>
          <Tab.Screen  
          name="Search"
          component={Webshop}
          
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" color={color} size={size} />)
          }}></Tab.Screen>
          <Tab.Screen  
          name="Login/Registration"
          component={Login}
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="log-in-outline" color={color} size={size} />)}}>

              </Tab.Screen>
          <Tab.Screen  
          name="Create Posting"
          component={CreatePosting}
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" color={color} size={size} />)
          }}></Tab.Screen>
          
        </Tab.Navigator>
      </NavigationContainer> 
      </View>
    
  )
}

}




/*
<View style={ styles.container }>
      <IconButton active={false} name="Login" iconName="log-in"></IconButton>
      <IconButton active={true} name="Search" iconName="search"></IconButton>
      <IconButton active={false} name="Create Posting" iconName="plus-square"></IconButton>

    </View>
*/
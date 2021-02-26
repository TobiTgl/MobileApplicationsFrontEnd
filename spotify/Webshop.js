import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from './Header';
import Postings from "./Postings";
import FooterControls from './FooterControls';



export default function Webshop(props) {
  
 
    return (
      <View style={styles.root}>
        
         
          <ScrollView>
            <Postings
              name="Welcome to our mobile shop"
              coverImage={{uri: "https://www.graphicsprings.com/filestorage/stencils/b8639dd9acb3c6ab0b6771e529ad3930.png?width=500&height=500"} }
              searchHeader="Search for products or filter by category, location and date"
              
              
              posting={props.postings}
              onChangeText={props.onChangeText}
              onChangeCategoryText={props.onChangeCategoryText}
              onSearchButtonClick={props.onSearchButtonClick}
              onDeleteClick={props.onDeleteClick}
              onDropDownSelect={props.onDropDownSelect}
              >
            </Postings>
          </ScrollView>
         
      </View>
    )
  }


const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    backgroundColor: 'black',
    flex: 1,
    paddingTop: 18
  }
});
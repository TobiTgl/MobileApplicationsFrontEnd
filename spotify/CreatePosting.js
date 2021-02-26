import React, { Component } from 'react'
import { View, Text, TextInput,StyleSheet,Button, TouchableHighlight, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export default function CreatePosting(props){
   
    return (
        <View style={styles.root}>
        <Text style={styles.heading}>Create Posting:</Text>
        <TextInput
             placeholder="  Title"
             placeholderTextColor="grey"
            style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
            onChangeText={(text)=> props.onCreateTitleChange(text)}
        />
        <TextInput
            placeholder="  Category"
            placeholderTextColor="grey"
            style={{ height: 40, width:200,  borderColor: 'grey', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
            onChangeText={(text)=> props.onCreateCategoryChange(text)}
        />
        
        <View style={ styles.buttonPhoto } >
          <Button color='grey' sytle={{color: 'white'}} title='Pick a Photo' onPress={()=>props.onImagePickerClick()}>
          </Button>
        </View> 

        <TextInput
            placeholder="  Price"
            placeholderTextColor="grey"
            style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
            onChangeText={(text)=> props.onCreatePriceChange(text)}
        />
        <TextInput
            placeholder="  Location"
            placeholderTextColor="grey"
            style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
            onChangeText={(text)=> props.onCreateLocationChange(text)}
        />
        <TextInput
            placeholder="  Delivery type"
            placeholderTextColor="grey"
            style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
            onChangeText={(text)=> props.onCreateDeliveryTypeChange(text)}
        />

        <View style={ styles.buttonCreate } >
          <Button color='darkred' sytle={{color: 'white'}} title='Create Posting' onPress={()=>props.onCreateButtonClick()}>
          </Button>
        </View>
        
        

        
    </View>
    )
}
const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    backgroundColor: 'black',
    flex: 1,
    paddingTop: 18
  },
  heading: {
      color: 'white',
      alignSelf: 'center',
      fontSize: 25,
      fontWeight: '700',
      marginBottom: 20,
      marginTop: 110
    },
    text: {
      color: 'white',
      alignSelf: 'center',
      fontSize: 15,
      fontWeight: '700'
    },
    buttonPhoto: {
      paddingTop: 8,
      paddingBottom: 15,
      paddingLeft: 60,
      paddingRight: 60,
      borderRadius: 10,
      width: '76%',
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: 'black'
    },
    buttonCreate: {
      paddingTop: 8,
      paddingBottom: 15,
      paddingLeft: 60,
      paddingRight: 60,
      borderRadius: 10,
      width: '76%',
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: 'black'
    }
  
});

import React, { Component } from 'react'
import { View, Text, TextInput,StyleSheet,Button, TouchableHighlight, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export default class CreatePosting extends Component {

    constructor(props)
  {
    super(props);

  }



  
openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if(pickerResult.cancelled == true)
    {
      alert('Image picker cancelled or failed');
      return;
    }

    const fileNameSplit = pickerResult.uri.split('/');
    const fileName = fileNameSplit[fileNameSplit.length - 1];

    let postForm = new FormData();
    postForm.append('myFiles', {
      uri: pickerResult.uri,
      name: fileName,
      type: 'image/jpeg'
    });
    postForm.append('foo', 'bar');

    axios({
      method: 'post',
      url: this.props.targetURI,
      data: postForm,
      headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then(function (response) {
          //handle success
          console.log(response);
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });
  }

render(){
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
          button: {
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 60,
            paddingRight: 60,
            borderRadius: 10,
            width: '55%',
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: 'darkred'
          }
        
      });
    return (
        <View style={styles.root}>
        <Text style={styles.heading}>Create Posting:</Text>
        <TextInput
             placeholder="  Title"
             placeholderTextColor="grey"
            style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
        />
        <TextInput
            placeholder="  Category"
            placeholderTextColor="grey"
            style={{ height: 40, width:200,  borderColor: 'grey', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
            
        />

        <TouchableOpacity onPress={this.openImagePickerAsync} style={{borderWidth: 1, borderRadius:10,marginBottom: 10, alignSelf: 'center', height: 40, width:200, borderWidth: 1, borderColor: 'grey', backgroundColor: 'grey'}}>
          <Text style={{color: 'white', padding:5, marginTop:4}}>Pick a photo</Text>
        </TouchableOpacity>

        <TextInput
            placeholder="  Price"
            placeholderTextColor="grey"
            style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
            
        />
        <TextInput
            placeholder="  Location"
            placeholderTextColor="grey"
            style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
            
        />
        <TextInput
            placeholder="  Delivery type"
            placeholderTextColor="grey"
            style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
            
        />

        <TouchableHighlight>
        <View style={ styles.button }>
             <Text style={ styles.text }>Create Posting</Text>
        </View>
        </TouchableHighlight>
    
        
        

        
    </View>
    )
}



}
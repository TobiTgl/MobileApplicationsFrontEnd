import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import IconButton from './IconButton'
import { NavigationContainer } from '@react-navigation/native'
import Login from './Login'
import CreatePosting from './CreatePosting'
import Webshop from './Webshop'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from 'react-native-vector-icons';
import {StatusBar} from 'expo-status-bar'
import * as ImagePicker from 'expo-image-picker'
import axios from 'axios'
import { Base64 } from 'js-base64'

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
      postings: [],
    postingSearch: "",
    filterSearch: "",
    loginUserName: "",
    loginPassword: "",
    registrationUserName: "",
    registrationPassword: "",
    registrationEmail: "",
    createTitle: "",
    createCategory: "",
    createLocation: "",
    createPrice: 0,
    createDeliveryType: "",
    fileName: "",
    uri: "",
    token: "",
    updates: 0,
    filter: "",
    }
  }

  componentDidMount() {
    axios.get('https://mobileappapiwebstore.herokuapp.com/items')//this is a promise object
      .then((response) => { //javascrip promise --then
        this.setState({ postings: response.data })
      
      });
    }

  onSearchFieldChange = (text) => {
    console.log('Keyboard text');
    console.log(text);
    this.setState({ postingSearch: text });
  }
  onChangeCategoryText = (text) => {
    console.log('Keyboard text');
    console.log(text);
    this.setState({ filterSearch: text });
  }

  onSearchButtonClick = () => {
    
      
    
      
    
    if(this.state.filterSearch != ""){
      if(this.state.filter == 'category'){
    axios.get('https://mobileappapiwebstore.herokuapp.com/items?category='+this.state.filterSearch)//this is a promise object
      .then((response) => { //javascrip promise --then
        this.setState({ postings: response.data })
      
      });
    }
    if(this.state.filter == 'location'){
      axios.get('https://mobileappapiwebstore.herokuapp.com/items?location='+this.state.filterSearch)//this is a promise object
        .then((response) => { //javascrip promise --then
          this.setState({ postings: response.data })
        
        });
      }
      if(this.state.filter == 'date'){
        axios.get('https://mobileappapiwebstore.herokuapp.com/items?date='+this.state.filterSearch)//this is a promise object
          .then((response) => { //javascrip promise --then
            this.setState({ postings: response.data })
          
          });
        }
    }else{
      axios.get('https://mobileappapiwebstore.herokuapp.com/items')//this is a promise object
      .then((response) => { //javascrip promise --then
        this.setState({ postings: response.data })
      
      });
    }
  }

  createButtonAlertUnsucessful = () => {
    Alert.alert(
      "Not Authorized to create postings",
      "Please register or log in to your account before creating postings.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );  
}

loginUnsucessful = () => {
  Alert.alert(
    "Login failed",
    "Wrong username or password. Please try again or create a new account.", 
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );  
}

loginSucessful = () => {
  Alert.alert(
    "Login successful",
    "You can now use all functionalities of our webshop.",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );  
}

createButtonAlertSucessful = () => {
  Alert.alert(
    "Success",
    "You successfully created a posting check the search tab to view it.",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );  
}

  onLoginUsernameChange = (text) => {
    console.log('Keyboard text');
    console.log(text);
    this.setState({ loginUserName: text });
  }
  onLoginPasswordChange = (text) => {
    console.log('Keyboard text');
    console.log(text);
    this.setState({ loginPassword: text });
  }
  onRegistrationUsernameChange = (text) => {
    console.log('Keyboard text');
    console.log(text);
    this.setState({ registrationUserName: text });
  }
  onRegistrationPasswordChange = (text) => {
    console.log('Keyboard text');
    console.log(text);
    this.setState({ registrationPassword: text });
  }
  onRegistrationEmailChange = (text) => {
    console.log('Keyboard text');
    console.log(text);
    this.setState({ registrationEmail: text });
  }
  onCreateTitleChange = (text) => {
    console.log('Keyboard text');
    console.log(text);
    this.setState({ createTitle: text });
  }
  onCreateCategoryChange = (text) => {
    console.log('Keyboard text');
    console.log(text);
    this.setState({ createCategory: text });
  }
  onCreateLocationChange = (text) => {
    console.log('Keyboard text');
    console.log(text);
    this.setState({ createLocation: text });
  }
  onCreatePriceChange = (text) => {
    console.log('Keyboard text');
    console.log(text);
    this.setState({ createPrice: text });
  }
  onCreateDeliveryTypeChange = (text) => {
    console.log('Keyboard text');
    console.log(text);
    this.setState({ createDeliveryType: text });
  }
  
  onCreateButtonClick = () => {

    if(this.state.token == ""){
      this.createButtonAlertUnsucessful()
    }else{
    
    let date = new Date().toISOString()
    
    let postForm = new FormData();
      postForm.append('images', {

        uri: this.state.uri,
        name: this.state.fileName,
        type: 'image/jpeg'
        
      });
      postForm.append('title', 
      this.state.createTitle
      );
      postForm.append('category', 
      this.state.createCategory
      );
      postForm.append('price', 
      this.state.createPrice
      );
      postForm.append('date',
      date
      );
      postForm.append('deliveryType', 
      this.state.createDeliveryType
      );
      postForm.append('location', 
      this.state.createLocation
      );
      console.log(postForm);
  
      axios({
        method: 'post',
        url: 'https://mobileappapiwebstore.herokuapp.com/items',
        data: postForm,
        headers: { 'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${this.state.token}`            
      }
        })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

      
    
        this.createButtonAlertSucessful()
      }
        

  }
     testclick=() => {console.log('test')}
 
    clearTextField=() => {
      this.setState({createTitle: ''})
      this.setState({updates: update+1})
      console.log(this.state.createTitle)
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

      this.setState({fileName: fileName})
      this.setState({uri: pickerResult.uri})
      
    }

    onRegisterClick = ()=>{
      
      axios.post('https://mobileappapiwebstore.herokuapp.com/register',
        {
          username: this.state.registrationUserName,
          password: this.state.registrationPassword,
          email: this.state.registrationEmail,
          
        })
        .then(response =>{
          console.log('Sign up successful');
        })
        .catch(error=>{console.log(error)})
      }
      onLoginClick = ()=>{

        axios({
          method: 'get',
          url: 'https://mobileappapiwebstore.herokuapp.com/loginForJWT',
          headers: {'Authorization': "Basic " + Base64.encode(this.state.loginUserName + ":" + this.state.loginPassword)            
        }
          })
          .then((response) =>{
            console.log(response.data)
            let tokenm = response.data.token
            console.log(tokenm)
            this.setState({token: tokenm})
              console.log(response);
              if(response.data.token != ""){
                  this.loginSucessful()
              }else{
                
              }
          })
          .catch(function (response) {
            
              //handle error
              console.log(response);
              Alert.alert(
                "Login failed",
                "Wrong username or password. Please try again or create a new account.",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );  
          
          });
      
        
        }

        onDropDownSelect = (filter) => {
          this.setState({
            filter: filter
        })
        }

        onDeleteClick= (id) =>{

          axios({
            method: 'delete',
            url: 'https://mobileappapiwebstore.herokuapp.com/items/'+ id,
            headers: {'Authorization': `Bearer ${this.state.token}`            
          }
            })
            .then(function (response) {
                //handle success
                Alert.alert(
                  "Deleting successful!",
                  "Posting was deleted successfully!",
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ],
                  { cancelable: false }
                );  
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
                Alert.alert(
                  "Not Authorized to delete postings!",
                  "Please register or log in to your account before creating postings.",
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ],
                  { cancelable: false }
                );  
            });



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
              options={{ 
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="search" color={color} size={size} />)
              }}>

                { props => <Webshop
                            {...props}
                            postings = {this.state.postings.filter((postings) => postings.title.includes(this.state.postingSearch))|| this.state.postings.filter((postings) => postings.category.includes(this.state.postingpostingSearch))||this.state.postings.filter((postings) => postings.location.includes(this.state.postingSearch))||this.state.postings.filter((postings) => postings.date.includes(this.state.postingSearch))}
                            onChangeText={this.onSearchFieldChange}
                            onChangeCategoryText={this.onChangeCategoryText}
                            onSearchButtonClick={this.onSearchButtonClick}
                            onDeleteClick={this.onDeleteClick}
                            onDropDownSelect={this.onDropDownSelect}
                />}
            

          </Tab.Screen>
          <Tab.Screen  
          name="Login/Registration"
            options={{ 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="log-in-outline" color={color} size={size} />)}}>
                { props => <Login
                            {...props}
                            onLoginUsernameChange={this.onLoginUsernameChange}
                            onLoginPasswordChange={this.onLoginPasswordChange}
                            onRegistrationUsernameChange={this.onRegistrationUsernameChange}
                            onRegistrationPasswordChange={this.onRegistrationPasswordChange}
                            onRegistrationEmailChange={this.onRegistrationEmailChange}
                            onRegisterClick={this.onRegisterClick}
                            onLoginClick={this.onLoginClick}
                />}

              </Tab.Screen>
          <Tab.Screen  
          name="Create Posting"
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" color={color} size={size} />)
          }}>
                { props => <CreatePosting
                            {...props}
                            onCreateTitleChange={this.onCreateTitleChange}
                            onCreateCategoryChange={this.onCreateCategoryChange}
                            onCreateLocationChange={this.onCreateLocationChange}
                            onCreateDeliveryTypeChange={this.onCreateDeliveryTypeChange}
                            onCreatePriceChange={this.onCreatePriceChange}
                            onImagePickerClick={this.openImagePickerAsync}
                            onCreateButtonClick={this.onCreateButtonClick}
                            onCreateClear={this.clearTextField}
                />} 

          </Tab.Screen>
          
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
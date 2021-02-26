import React from 'react'
import { View, Text, TextInput,StyleSheet,Button, TouchableHighlight } from 'react-native'

export default function Login(props) {
    return (
        <View style={styles.root}>
            <Text style={styles.heading}>User login</Text>
            <TextInput
                 placeholder="  Username"
                 placeholderTextColor="grey"
                style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
                onChangeText={(text)=> props.onLoginUsernameChange(text)}
            />
            <TextInput
                placeholder="  Password"
                secureTextEntry
                placeholderTextColor="grey"
                style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
                onChangeText={(text)=> props.onLoginPasswordChange(text)}
            />
            <View style={ styles.button } >
                <Button color='darkred' sytle={{color: 'white'}} title='Login' onPress={() => props.onLoginClick()}>
                </Button>
            </View> 


            <Text style={styles.heading}>User registration</Text>
            <TextInput
                 placeholder="  Username"
                 placeholderTextColor="grey"
                style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
                onChangeText={(text)=> props.onRegistrationUsernameChange(text)}
            />
            <TextInput
                placeholder="  Password"
                secureTextEntry
                placeholderTextColor="grey"
                style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
                onChangeText={(text)=> props.onRegistrationPasswordChange(text)}
            />
            <TextInput
                placeholder="  Email"
                placeholderTextColor="grey"
                style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
                onChangeText={(text)=> props.onRegistrationEmailChange(text)}
            />
            <View style={ styles.button } >
                <Button color='darkred' sytle={{color: 'white'}} title='Register' onPress={() => props.onRegisterClick()}>
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
      button: {
        paddingTop: 15,
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
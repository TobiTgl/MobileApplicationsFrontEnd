import React from 'react'
import { View, Text, TextInput,StyleSheet,Button, TouchableHighlight } from 'react-native'

export default function Login() {
    return (
        <View style={styles.root}>
            <Text style={styles.heading}>User login</Text>
            <TextInput
                 placeholder="  Username"
                 placeholderTextColor="grey"
                style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
            />
            <TextInput
                placeholder="  Password"
                placeholderTextColor="grey"
                style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
                
            />
            <TouchableHighlight>
            <View style={ styles.button }>
                 <Text style={ styles.text }>Login</Text>
            </View>
            </TouchableHighlight>

            <Text style={styles.heading}>User registration</Text>
            <TextInput
                 placeholder="  Username"
                 placeholderTextColor="grey"
                style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
            />
            <TextInput
                placeholder="  Password"
                placeholderTextColor="grey"
                style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
                
            />
            <TextInput
                placeholder="  Email"
                placeholderTextColor="grey"
                style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10, alignSelf: 'center', }}
                
            />
            <TouchableHighlight>
            <View style={ styles.button }>
                 <Text style={ styles.text }>Register</Text>
            </View>
            </TouchableHighlight>
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
        width: '50%',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'darkred'
      }
    
  });
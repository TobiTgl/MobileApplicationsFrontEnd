import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SinglePosting = (props) => {
  return (
    <View style={ styles.container }>
      <Image style={ styles.image } source={{uri: props.image }}></Image>
      <View style={ styles.posting }>
        <Text style={ styles.title}>{ props.name}</Text>
        <Text style={ styles.username}>{ props.sellerUsername}</Text>
        <Text style={ styles.price}>{ props.price} €</Text>
        <Text >{ props.id}</Text>
        
      </View>
      <View>
        
      </View>
      <View >
         <View style={ styles.button}>
            <Button color='darkred' title='details'></Button>
          </View>
          <View style={ styles.button}>
            <Button  color='darkred' title='delete' onPress={()=>props.onDeleteClick(props.id)}></Button>
          </View>
      </View>
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10

  },
  posting: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10

  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  title: {
    color: 'white',
    fontSize: 16
  },
  username: {
    color: 'gray'
  },
  price: {
    color: 'white',
    fontSize: 18

  },
  button: {
    
    paddingBottom: 5,
    paddingLeft: 60,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  }
})

export default SinglePosting
//<MaterialCommunityIcons name='dots-horizontal' color='white' size={25} color="gray"></MaterialCommunityIcons>
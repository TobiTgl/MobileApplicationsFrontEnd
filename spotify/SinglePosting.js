import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SinglePosting = (props) => {
  return (
    <View style={ styles.container }>
      <Image style={ styles.image } source={{uri: props.image }}></Image>
      <View style={ styles.posting }>
        <Text style={ styles.title}>{ props.name}</Text>
        <Text style={ styles.username}>{ props.sellerUsername}</Text>
        
      </View>
      <View>
        <Text style={ styles.price}>{ props.price} €</Text>
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

  }
})

export default SinglePosting
//<MaterialCommunityIcons name='dots-horizontal' color='white' size={25} color="gray"></MaterialCommunityIcons>
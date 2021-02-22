import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import SecondaryButton from './SecondaryButton';
import PrimaryButton from './PrimaryButton';
import { Entypo } from '@expo/vector-icons';
import PostingsHeadline from './PostingsHeadline';
import MultiplePostings from './MultiplePostings';

const Postings = (props) => {
  return (


    <View style={ styles.main }>
      <Image source={ props.coverImage } style={ styles.coverImage } resizeMode="cover"></Image>
      <Text style={ [styles.radioName, styles.textColor] }>{ props.name }</Text>

      
      <Text style={ styles.muted }>{ props.searchHeader}</Text>

     
      <TextInput
        placeholder="  Type here..."
        placeholderTextColor="grey"
        style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10 }}
        
      />
      <PrimaryButton>Search</PrimaryButton>
      <PostingsHeadline></PostingsHeadline>
      <MultiplePostings posting={ props.posting } style={ styles.playlistSongs }></MultiplePostings>
    </View>


  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    paddingRight: 10,
    paddingLeft: 10

  },
  coverImage: {
    width: 150,
    height: 150,
    marginTop: 5
  },
  radioName: {
    fontWeight: '700',
    fontSize: 25,
    padding: 15
  },
  muted: {
    color: 'rgb(180,180,180)',
    marginBottom: 5,
    marginTop: 5

  },
  textColor: {
    color: 'white'
  },
  stationContentHeader: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 25,
    marginBottom: 20
  },
  pageIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  playlistSongs: {
    marginTop: 25
  }
})

export default Postings


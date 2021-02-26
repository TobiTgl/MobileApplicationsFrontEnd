import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';
import SecondaryButton from './SecondaryButton';
import PrimaryButton from './PrimaryButton';
import { Entypo } from '@expo/vector-icons';
import PostingsHeadline from './PostingsHeadline';
import MultiplePostings from './MultiplePostings';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

const Postings = (props) => {
  return (


    <View style={ styles.main }>
      <Image source={ props.coverImage } style={ styles.coverImage } resizeMode="cover"></Image>
      <Text style={ [styles.radioName, styles.textColor] }>{ props.name }</Text>

      
      <Text style={ styles.muted }>{ props.searchHeader}</Text>

     
      <TextInput
        placeholder="  Search title..."
        placeholderTextColor="grey"
        style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10 }}
        onChangeText={(text)=> props.onChangeText(text)}
      />
      
      <DropDownPicker
          items={[
              {label: 'category', value: 'category', icon: () => <Icon name="grid" size={18} color="#900" />, hidden: false},
              {label: 'location', value: 'location', icon: () => <Icon name="map-pin" size={18} color="#900" />},
              {label: 'date', value: 'date', icon: () => <Icon name="clock" size={18} color="#900" />},
          ]}
          //defaultValue={this.state.country}
          containerStyle={{height: 40, width: 200, marginBottom: 10}}
          style={{backgroundColor: 'grey', borderColor: 'darkred', color: 'white'}}
          placeholder='Select filter'
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          dropDownStyle={{backgroundColor: 'grey', borderColor: 'darkred'}}
          onChangeItem={(items) =>props.onDropDownSelect(items.value)}
      />
      <TextInput
        placeholder="  Search by selected filter..."
        placeholderTextColor="grey"
        style={{ height: 40, width:200,  borderColor: 'gray', borderWidth: 1, borderRadius:10, color: 'white', marginBottom: 10 }}
        onChangeText={(text)=> props.onChangeCategoryText(text)}
      />
      <View style={ styles.button}>
      <Button color='darkred' title='Update Postings' onPress={()=>props.onSearchButtonClick()}>Update</Button>
      </View>     
      <PostingsHeadline></PostingsHeadline>
      <MultiplePostings posting={ props.posting } style={ styles.playlistSongs } onDeleteClick={props.onDeleteClick}></MultiplePostings>
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
  },
  button: {
    paddingTop: 8,
    paddingBottom: 15,
    paddingLeft: 60,
    paddingRight: 60,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
})

export default Postings


import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SinglePosting from './SinglePosting';

const MultiplePostings = (props) => {
  return (
    <View style={ [styles.container, props.style] }>
      { props.posting.map(s => <SinglePosting key={s.id} id={s.id} name={s.title} sellerUsername={s.sellerUsername} price={s.price} image={s.images} onDeleteClick={props.onDeleteClick}></SinglePosting>) }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
})

export default MultiplePostings

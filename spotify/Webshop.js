import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from './Header';
import Postings from "./Postings";
import FooterControls from './FooterControls';


let postings = [
  {
    id: 1,
    userId: 1,
    title: "Used car",
    category: "Cars",
    images: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/daniel-golson-volvo-940-1557174566.jpg?crop=1.00xw:0.595xh;0,0.331xh&resize=1200:*",
    price: 1999,
    date: "2021-02-22",
    deliveryType: "Pick up from dealer",
    sellerUsername: "testeruser",
    sellerContact: "tester@user.com",
    location: "Oulu"
  },
  {
    id: 2,
    userId: 2,
    title: "Pink flowers",
    category: "flowers",
    images: "https://res.cloudinary.com/tobitgl/image/upload/v1613407379/sample.jpg",
    price: 20.20,
    date: "2021-02-29",
    deliveryType: "Next day delivery",
    sellerUsername: "flowerfreak1000",
    sellerContact: "flowers@web.nl",
    location: "Amsterdam, NL"
  },
  {
    id: 3,
    userId: 2,
    title: "Dancing banana figure",
    category: "Toys",
    images: "https://res.cloudinary.com/tobitgl/image/upload/v1613563336/ff7f8f7bfbc7cce9a2caf1effb65b5f5.png",
    price: 49.99,
    date: "2020-12-31",
    deliveryType: "Standard DHL",
    sellerUsername: "tekpsterfi",
    sellerContact: "tekp@ster.fi",
    location: "Shenzen, China"
  },
  {
    id:43,
    userId: 2,
    title: "Dancing banana figure",
    category: "Toys",
    images: "https://res.cloudinary.com/tobitgl/image/upload/v1613563336/ff7f8f7bfbc7cce9a2caf1effb65b5f5.png",
    price: 49.99,
    date: "2020-12-31",
    deliveryType: "Standard DHL",
    sellerUsername: "tekpsterfi",
    sellerContact: "tekp@ster.fi",
    location: "Shenzen, China"
  },
  {
    id: 5,
    userId: 2,
    title: "Dancing banana figure",
    category: "Toys",
    images: "https://res.cloudinary.com/tobitgl/image/upload/v1613563336/ff7f8f7bfbc7cce9a2caf1effb65b5f5.png",
    price: 49.99,
    date: "2020-12-31",
    deliveryType: "Standard DHL",
    sellerUsername: "tekpsterfi",
    sellerContact: "tekp@ster.fi",
    location: "Shenzen, China"
  },
];

export default class Webshop extends Component {
  render() {
    return (
      <View style={styles.root}>
        
         
          <ScrollView>
            <Postings
              name="Welcome to the mobile shop"
              coverImage={{uri: "https://www.graphicsprings.com/filestorage/stencils/b8639dd9acb3c6ab0b6771e529ad3930.png?width=500&height=500"} }
              searchHeader="Search for products or filter by category, location and date"
              
              //songs={ playlistSongs }
              posting={postings}
              >
            </Postings>
          </ScrollView>
         
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    backgroundColor: 'black',
    flex: 1,
    paddingTop: 18
  }
});
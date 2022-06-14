import React, { Component } from "react";
import { StyleSheet, Text, ImageBackground} from "react-native";

export default class TitleBanner extends Component {

  render() {
    return (
        <ImageBackground 
          source={{uri:'https://media.istockphoto.com/photos/contact-list-picture-id184103822?k=6&m=184103822&s=170667a&w=0&h=Nh78Nb3PuZNHvxhlBJMKdccpr_T3RcR_BiPlLaerlPo='}}
          style={{width: '100%', height:'auto'}}>
          <Text style = {styles.imageTitle}>AD340 - ReactNative</Text>
        </ImageBackground>             
    );
  }
}

const styles = StyleSheet.create({
  imageTitle: {
    fontSize: 24,
    fontWeight: '700',
    color:'red',
    textAlign:'center',
  },
});

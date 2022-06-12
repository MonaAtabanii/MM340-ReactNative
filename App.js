/**
 * Sample React Native App
 * Update this new project to show the following on the home screen:
 * An application name or heading, centered and styled in bold with a font-size >= 24
 * A brief 1-2 sentence description of the application
 * A list of values (e.g. classes, names, movies, etc.) (see https://reactnative.dev/docs/using-a-listview (Links to an external site.))
 * Make sure your new application runs correct in the Android Studio emulator.
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';


const App = () => {
    return (
      <ScrollView>
        <View style ={styles.container}>

      <ImageBackground 
          source={{uri:'https://media.istockphoto.com/photos/contact-list-picture-id184103822?k=6&m=184103822&s=170667a&w=0&h=Nh78Nb3PuZNHvxhlBJMKdccpr_T3RcR_BiPlLaerlPo='}}
          style={{width: '100%', height:'auto'}}
          >
      <Text style = {styles.imageTitle}>AD340 - ReactNative</Text>
      </ImageBackground>     
      <Text style = {styles.description}>
        A ReactNative App, that shows how to use the reactNative in the android Emulator{"\n"}
        {"\n"}
        List of Items:.
      </Text>
      <FlatList
        data={[
          {key: 'Home'},
          {key: 'People'},
        
        ]} 
        renderItem = {({item}) => <TouchableOpacity style={styles.button} title={item.key}><Text style={styles.buttonText}>{item.key}</Text></TouchableOpacity>}>

      </FlatList>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign:'center',
  },
  imageTitle: {
    fontSize: 24,
    fontWeight: '700',
    color:'red',
    textAlign:'center',
  },
  description: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: '400',
    textAlign:'justify',
    marginLeft:10,
    marginEnd:8,
  },
  button: {
    marginBottom: 10,
    paddingHorizontal: 50,
    height: 44,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignContent: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontWeight: '600',
    color:'white',
  },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
});

export default App;

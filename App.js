/**Assignment 8:
 * Sample React Native App
 * Update this new project to show the following on the home screen:
 * An application name or heading, centered and styled in bold with a font-size >= 24
 * A brief 1-2 sentence description of the application
 * A list of values (e.g. classes, names, movies, etc.) (see https://reactnative.dev/docs/using-a-listview (Links to an external site.))
 * Make sure your new application runs correct in the Android Studio emulator.
 */
/**Assignment 9:
 * 
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PeopleList from './PeopleList.js'
import PersonDetails from './PersonDetails.js'
import {StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';
import TitleBanner from './TitleBanner';

const s = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <s.Navigator>
      <s.Screen
          name="Base Screen"
          component={LoadScreen}
          options={{headerShown:false}}
        />
        <s.Screen
          name="People List"
          component={PeopleList}
        />
        <s.Screen 
          name="Person Details" 
          component={PersonDetails} />
      </s.Navigator>
    </NavigationContainer>
  );
} 

const LoadScreen=({navigation})=>{
  return(
    <View style ={styles.container}>
        <TitleBanner/>
        <Text style = {styles.description}>
          A ReactNative App, that shows how to use the reactNative in the android Emulator{"\n"}
          {"\n"}
          List of Items:-
          {"\n"}
        </Text>
        <FlatList
          data={[
            {key: 'People List'},
          ]} 
          renderItem = {({item}) => 
            <TouchableOpacity style={styles.button} title={item.key} onPress={()=>navigation.navigate('People List')}>
              <Text style={styles.buttonText}>{item.key}</Text>
            </TouchableOpacity>
          }
        >
        </FlatList> 
    </View>
  )
};

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
    borderRadius: 40,
    alignContent: 'center',
    justifyContent: 'center',
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

import React, {useState, useEffect} from "react";
import { Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import TitleBanner from './TitleBanner.js';


const PeopleList = ({navigation})=>{

  const [usersList, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/users?_quantity=10')
    .then(response => response.json())
    .then(json => {
      setUsers(json.data)
    })
    .catch(error => console.log(error));
  }, []); 

  return (
    <View style ={styles.container}>
       <TitleBanner/>    
        <Text style = {styles.description}>
          A new Screen to show the Users' List{"\n"}
          Users' List:-
          {"\n"}
        </Text> 
           <FlatList
            data={usersList}
            keyExtractor={(_x, i) => i}
            renderItem={({item}) =>
              <TouchableOpacity style={styles.button} title={item.id} onPress={() => navigation.navigate('Person Details', {user: item})}>
                <Text style={styles.buttonText}>
                  {`${item.firstname} ${item.lastname}`}
                </Text>
              </TouchableOpacity>
            } 
          /> 
    </View>
    
  )
};


const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
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
    margin: 4,
    fontSize: 18,
    textAlign: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default PeopleList;
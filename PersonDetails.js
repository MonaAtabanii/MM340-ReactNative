import React from 'react';
import { Text, View, Image,ScrollView, StyleSheet } from 'react-native';
import  {DataTable}  from 'react-native-paper';
import TitleBanner from './TitleBanner.js';

const PersonDetails = ({ route }) => {
  const {user} = route.params;
  return ( 
    <View style={styles.container}> 
        <TitleBanner/>
        <ScrollView>
        <Text style = {styles.description}>
          A new Screen to show the Person Details{"\n"}
          Person Details:-
          {"\n"}
        </Text>
        <DataTable style={styles.buttonText}>
          <DataTable.Row>
                <DataTable.Cell>
                  <Text>Full Name</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text>{user.firstname} {user.lastname}</Text>
                </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>
                  <Text>User Name</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text>{user.username}</Text>
                </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell >
                  <Text>Email</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text>{user.email}</Text>
                </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>
                  <Text>Website</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text>{user.website}</Text>
                </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>
                  <Text>Person Image</Text>
                </DataTable.Cell>
                {/* //I tried to fit the inline image in the row cell, and couldn't make it fit correctley
                <DataTable.Cell>
                  <Image
                    style={styles.image}
                    resizeMode='contain'
                    source={{
                      uri: `${user.image}${user.id}`,
                    }}
                  />  
                </DataTable.Cell> */}
            </DataTable.Row>
          </DataTable>
        <View>
          <Image
            style={styles.image}
            resizeMode='contain'
            source={{
              uri: `${user.image}${user.id}`,
            }}
          />  
          </View>
          </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  description: {
    marginTop: 0,
    fontSize: 20,
    fontWeight: '400',
    textAlign:'justify',
    marginLeft:10,
    marginEnd:8,
  },
  buttonText: {
    fontWeight: '600',
    color:'white',
    margin: 4,
    fontSize: 18,
    textAlign: "center",
  },
  image:{
    height: 200,
    width: 200,
    borderColor: 'black',
    alignSelf: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default PersonDetails;

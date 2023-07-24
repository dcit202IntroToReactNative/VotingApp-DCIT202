import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';


const Separator = () => <View style={styles.separator} />;

export default function HomeScreen() {
    return (
      <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.title}>SRC</Text>
      </TouchableOpacity>
      <Separator/>
      <TouchableOpacity style={styles.buttonhall}>
          <Text style={styles.title}>Hall</Text>
      </TouchableOpacity>
      <Separator/>
      <TouchableOpacity style={styles.buttonDep}>
          <Text style={styles.title}>Department</Text>
      </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent:'center',
    padding:22,
    height:70,
  },
  button:{
    height:100,
    width:350,
    borderRadius:15,
    backgroundColor:"#A7FFEB"
  },
    buttonhall:{
    height:100,
    width:350,
    borderRadius:15,
    backgroundColor:"#B9F6CA"
  },
    buttonDep:{
    height:100,
    width:350,
    borderRadius:15,
    backgroundColor:"#CCFF90"
  },
  title: {
    textAlign: 'center',
    marginVertical: 25,
    fontSize:30,
  },
  separator: {
    marginVertical: 30,
    borderBottomColor: '#737373',
  },
});

   

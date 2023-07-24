import { Avatar } from '@mui/material';
import { Person2Rounded } from '@mui/icons-material';
import * as React from 'react';
import { View, Text } from 'react-native';
import {StyleSheet} from "react-native";

export default function ProfileScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop:40 }}>
        <Avatar   sx={{ width: 150, height: 150 }}>
            <Person2Rounded sx={{ fontSize: 70 }}/>
        </Avatar>
        <Text style={styles.title}>Name</Text>
        <Text style={styles.title}>Student ID Number</Text>
        <Text style={styles.title}>Programme of Study</Text>
        <Text style={styles.title}>Hall of Residence</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    title: {
        textAlign: 'center',
        marginVertical: 25,
        fontSize:25,
      },
});

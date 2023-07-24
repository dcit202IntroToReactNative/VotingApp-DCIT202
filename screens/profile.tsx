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
        <Text>Name</Text>
        <Text>Student ID Number</Text>
        <Text>Programme of Study</Text>
        <Text>Hall of Residence</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
});

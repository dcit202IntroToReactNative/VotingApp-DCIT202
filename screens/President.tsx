// import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Avatar } from '@mui/material';
import { Person2Rounded } from '@mui/icons-material';

const Separator = () => <View style={styles.separator} />;

export default function PresidentScreen({navigation} : any) {
  return (
    <View style={styles.container}>
    <Card sx={{ maxWidth: 346 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Kofi Asare-Amankwah
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" style={styles.button} onClick={() => {navigation.navigate("Vice President")}}>Vote</Button>
      </CardActions>
    </Card>
    <Separator/>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Kelvin Amponsah
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" style={styles.button} onClick={() => {navigation.navigate("Vice President")}}>Vote</Button>
      </CardActions>
    </Card>
    
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent:'center',
      marginHorizontal:20
    },
    button:{
      height:50,
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
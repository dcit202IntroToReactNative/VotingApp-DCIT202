// import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';

const Separator = () => <View style={styles.separator} />;

export default function SecretaryScreen({navigation} : any) {
  return (
    <View style={styles.container}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Kofi
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" style={styles.button} onClick={() => {navigation.navigate("MainScreen")}}>Vote</Button>
      </CardActions>
    </Card>
    <Separator/>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Kofi
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" style={styles.button} onClick={() => {navigation.navigate("MainScreen")}}>Vote</Button>
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

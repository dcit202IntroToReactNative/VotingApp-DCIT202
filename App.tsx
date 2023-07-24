import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import Home from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeScreen from './screens/home';
import PresidentScreen from './screens/President';
import ProfileScreen from './screens/profile';
import React from 'react';


export default function App() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
  <View>
  <div style={{}}>
  <HomeScreen/>
  </div>
  <BottomNavigation style={styles.container}
    showLabels
    value={value}
    onChange={(event, newValue) => {
    setValue(newValue);}}
>
  <BottomNavigationAction label="Home" icon={<Home />} />
  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
</BottomNavigation>
</View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
   
  },
});

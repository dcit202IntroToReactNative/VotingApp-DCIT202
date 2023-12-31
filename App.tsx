// import { StyleSheet, Text, View } from 'react-native';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import House from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import HomeScreen from './screens/home';
// import PresidentScreen from './screens/President';
// import ProfileScreen from './screens/profile';
// import React from 'react';
// import { Paper } from '@mui/material';
// import ProminentAppBar from './components/TopAppBar';

import React, {Fragment} from 'react';
import AppNavigator from "./navigation/router-config"
const App = () => {
  return (
    <Fragment>
      <AppNavigator />
    </Fragment>
  );
};
export default App;

// export default function App() {
//   const [value, setValue] = React.useState('recents');

//   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//     setValue(newValue);
//   };

//   return (
//   <View>
//     <HomeScreen/>
//   <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
//       <BottomNavigation showLabels value={value} onChange={(event, newValue) => {setValue(newValue);}}>
//           <BottomNavigationAction label="Home" icon={<House/>}/>
//           <BottomNavigationAction label="Ballot" icon={<FavoriteIcon/>}/>
//           <BottomNavigationAction label="Profile" icon={<LocationOnIcon />}/>
//         </BottomNavigation>
//     </Paper>
// </View>
//   );
// }

// const styles = StyleSheet.create({
//     container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'flex-end',
//     justifyContent: 'center',
//   },
// });

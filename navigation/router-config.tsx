import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../screens/profile";
import PresidentScreen from "../screens/President";
import SecretaryScreen from "../screens/Secretary";
import VicePresidentScreen from "../screens/vice";
import { Icon, IconButton, SvgIcon } from "@mui/material";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const RouterConfig = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="OnBoarding"
      >
        {/* New screen that includes the Tab.Navigator */}
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="President" component={PresidentScreen} />
        <Stack.Screen name="Vice President" component={VicePresidentScreen} />
        <Stack.Screen name="Secretary" component={SecretaryScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

// MainScreen to include the Tab.Navigator
const MainScreen = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true, tabBarActiveBackgroundColor: '#A7FFEB', tabBarActiveTintColor:'black' }}>
      <Tab.Screen name="Home" component={Home} options={{tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
        <HomeIcon/>
        ),
      }} />
      <Tab.Screen name="Profile" component={Settings} options={{tabBarLabel: 'Profile', tabBarIcon: ({ color }) => (
        <PersonIcon/>
        ),
      }}/>
    </Tab.Navigator>
  );
};

export default RouterConfig;

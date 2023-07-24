import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";

import { SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../screens/profile";
import PresidentScreen from "../screens/President";

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

      </Stack.Navigator>
    </NavigationContainer>
  );
};

// MainScreen to include the Tab.Navigator
const MainScreen = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default RouterConfig;

import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ControllerSelectorNavigation from "../navigation/ControllerSelectorNavigation";
import Welcome from "../navigation/WelcomeNavigation";
import SettingsNavigation from "../navigation/SettingsNavigation";
import AuthScreen from "./AuthScreen";
import NavigationDrawerContent from "../components/NavigationDrawerContent";
import { useSelector } from "react-redux";


const MainPage = () => {
  const Drawer = createDrawerNavigator();

  const controllerData = useSelector(
    (state) => state.airconReducer.aircons
  );

  const startPage = () => {
    if (controllerData.length == 0) {
      return "Welcome"
    } else {
      return "ControllerList"
    }
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName= {startPage()}
        drawerContent={(props) => <NavigationDrawerContent {...props} />}
      >
        <Drawer.Screen name="Welcome" component={Welcome} />
        <Drawer.Screen
          name="ControllerList"
          component={ControllerSelectorNavigation}
        />
        <Drawer.Screen name="Settings" component={SettingsNavigation} />
        <Drawer.Screen name="Sign In" component={AuthScreen} />
      </Drawer.Navigator>
  </NavigationContainer>
  );
};

export default MainPage;

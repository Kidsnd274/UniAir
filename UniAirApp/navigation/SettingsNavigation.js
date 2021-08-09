import React from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Icon, Header } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import Settings from "../screens/Settings";
import AuthScreen from "../screens/AuthScreen";
import ControllerSettingNavigation from "./ControllerSettingNavigation";
const Stack = createStackNavigator();

const SettingsNavigation = (props) => {
  return (
    <Stack.Navigator initialRouteName = "Settings">
      <Stack.Screen name = "Settings"  component = {Settings} options = {headerStyling}/>
      <Stack.Screen name = "Google Sign in" component = {AuthScreen} options = {headerStyling}/>
      <Stack.Screen name = "Edit Controller Details" component = {ControllerSettingNavigation} options = {headerStyling}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    borderWidth:1
  }
})

const headerStyling = {
  headerStyle: {
    backgroundColor: "#00B4D8",
  },
  headerTitleStyle: {
    color: "#FFFF"
  },
};

export default SettingsNavigation
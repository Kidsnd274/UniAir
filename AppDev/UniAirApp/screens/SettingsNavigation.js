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
import Settings from "./Settings";
import AuthScreen from "./AuthScreen";
import ControllerSettingNavigation from "./ControllerSettingNavigation";
const Stack = createStackNavigator();

const SettingsNavigation = (props) => {
  return (
    <Stack.Navigator initialRouteName = "Settings">
      <Stack.Screen name = "Settings"  component = {Settings}/>
      <Stack.Screen name = "Google Sign in" component = {AuthScreen}/>
      <Stack.Screen name = "Edit Controller Details" component = {ControllerSettingNavigation}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    borderWidth:1
  }
})

export default SettingsNavigation
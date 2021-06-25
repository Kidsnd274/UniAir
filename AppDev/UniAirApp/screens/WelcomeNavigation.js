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
import Registration from "./Registration";
import Welcome from "./Welcome";
import LearnMore from "./LearnMore";

const Stack = createStackNavigator();

const WelcomeNavigation = (props) => {
  return (
    <Stack.Navigator initialRouteName = "StartUp">
      <Stack.Screen name = "Welcome" component = {Welcome}/>
      <Stack.Screen name = "LearnMore" component = {LearnMore}/>
      <Stack.Screen name = "Registration" component = {Registration}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    borderWidth:1
  }
})

export default WelcomeNavigation
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
import MainAppBar from "../components/MainAppBar";

const Stack = createStackNavigator();

const WelcomeNavigation = (props) => {
  return (
    <Stack.Navigator initialRouteName = "Welcome" screenOptions = {{header : () => (<MainAppBar></MainAppBar>)}}>
      <Stack.Screen name = "Welcome" component = {Welcome} options = {headerStyling}/>
      <Stack.Screen name = "Learn More" component = {LearnMore} options = {headerStyling}/>
      <Stack.Screen name = "Registration" component = {Registration} options = {headerStyling}/>
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
export default WelcomeNavigation
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
import Registration from "../screens/Registration";
import Welcome from "../screens/Welcome";
import LearnMore from "../screens/LearnMore";
import MainAppBar from "../components/appbar/MainAppBar";
import ServerLogin from "../screens/ServerLogin";
import ServerSetup from "../screens/ServerSetup";

const Stack = createStackNavigator();

const WelcomeNavigation = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        header: ({ scene, navigation }) => (
          <MainAppBar scene={scene} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerTitle : "Welcome"}}
      />
      <Stack.Screen
        name="Learn More"
        component={LearnMore}
        options={{headerTitle : "Learn More"}}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{headerTitle : "Register a UniAir Server"}}
      />
      <Stack.Screen
        name="ServerLogin"
        component={ServerLogin}
        options={{headerTitle : "UniAir Server Login"}}
      />
      <Stack.Screen
        name="ServerSetup"
        component={ServerSetup}
        options={{headerTitle : "UniAir Server Setup"}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
});

export default WelcomeNavigation;

import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {store} from './redux/store'
import {Provider} from 'react-redux';
import Controller from "./screens/Controller";
import Registration from "./screens/Registration";
import ControllerSelectorMain from "./screens/ControllerSelectorMain";
import ControllerSelectorNavigation from "./screens/ControllerSelectorNavigation";
import Welcome from "./screens/WelcomeNavigation";
import SettingsNavigation from "./screens/SettingsNavigation";
import AuthScreen from "./screens/AuthScreen";
import NavigationDrawerContent from "./components/NavigationDrawerContent";
import ControllerEditor from "./screens/ControllerEditor";
import ControllerSettingNavigation from "./screens/ControllerSettingNavigation";
import ControllerSettingMain from "./screens/ControllerSettingMain";

export default function App() {
  const mainData = store.getState().airconReducer;
  const Drawer = createDrawerNavigator();

  function ControllerCreator(dataSet) {
    return () => {
      return <Controller data={dataSet} />;
    };
  }

  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Welcome" drawerContent = {(props) => <NavigationDrawerContent {...props} />}>
          <Drawer.Screen name="Welcome" component={Welcome} />
          <Drawer.Screen name = "ControllerList" component = {ControllerSelectorNavigation} />
          <Drawer.Screen name = "Settings" component = {SettingsNavigation}/>
          <Drawer.Screen name = "Sign In" component= {AuthScreen}/>
        </Drawer.Navigator>
       </NavigationContainer>
     </Provider>
   
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
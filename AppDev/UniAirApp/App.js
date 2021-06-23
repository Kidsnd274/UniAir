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
import ControllerSelector from "./screens/ControllerSelector";

export default function App() {
  const mainData = store.getState().airconReducer;
  const Drawer = createDrawerNavigator();

  function ControllerCreator(dataSet) {
    return () => {
      return <Controller data={dataSet} />;
    };
  }

  return (
    // <Provider store = {store}>
    //   <NavigationContainer>
    //     <Drawer.Navigator initialRouteName="Living Room">
    //       <Drawer.Screen name="Registration" component={Registration} />
    //         {mainData.aircons.map((x) => (
    //           <Drawer.Screen name={x.roomName} component={ControllerCreator(x)} />
    //         ))}
    //     </Drawer.Navigator>
    //   </NavigationContainer>
    // </Provider>
    <ControllerSelector></ControllerSelector>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
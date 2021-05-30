import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import StartUp from "./StartUp";
import Controller from "./Controller";
import Registration from "./Registration";
import {useSelector} from "react-redux"




const MainPage = () => {

  const mainData = useSelector(x => x.setUp)

  const Drawer = createDrawerNavigator();

  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Registration">
          <Drawer.Screen name="Registration" component={Registration} />
          {mainData.map((x) => (
  <Drawer.Screen name={x.roomName} component={ControllerCreater(x)} />
))}
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

function ControllerCreater(dataSet) {
  return () => {
    return <Controller data={dataSet} />;
  };
}

export default MainPage;
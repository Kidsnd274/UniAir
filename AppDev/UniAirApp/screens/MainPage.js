import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import StartUp from "./StartUp";
import Controller from "./Controller";
import Registration from "./Registration";
import { useSelector } from "react-redux";
import { updateAirconData } from "../redux/actions";
import MainAppBar from "../components/MainAppBar";

const MainPage = () => {
  const mainData = useSelector(state => state.airconReducer);
  const Drawer = createDrawerNavigator();

  useEffect(() => {
    updateAirconData(0);
  })

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Living Room" screenOptions = {{header : MainAppBar}}>
        <Drawer.Screen name="Registration" component={Registration} />
        {mainData.aircons.map((x) => (
          <Drawer.Screen name={x.roomName} component={ControllerCreator(x)} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

function ControllerCreator(dataSet) {
  console.log("LOG: Controller created at screens/MainPage")
  return () => {
    return <Controller data={dataSet} />;
  };
}

export default MainPage;

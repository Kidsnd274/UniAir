import React from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Icon, Header } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ControllerSelectorMain from "./ControllerSelectorMain";
import { useSelector } from "react-redux";
import Controller from "./Controller";

const ControllerSelectorNavigation = () => {

  function ControllerCreator(dataSet) {
    return () => {
      return <Controller data={dataSet}/>
    }
  }
  
  const controllerData = useSelector(
    (state) => state.airconReducer
  );
  
  const Stack = createStackNavigator();

  return (
      <Stack.Navigator initialRouteName = "main">
        <Stack.Screen name = "Controllers" component = {ControllerSelectorMain}/>
        {controllerData.aircons.map((x) => (<Stack.Screen name = {x.roomName} component = {ControllerCreator(x)}/>))}
      </Stack.Navigator>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  scrollview: {
    flex: 1,
    width: "100%",
    margin: 10,
    alignContent: "space-between",
  },
  childScrollView: { alignItems: "center" },
  selector: {
    flexDirection: "column",
    flex: 1,
    borderWidth: 1,
    width: "80%",
    alignContent: "center",
    marginVertical: 10,
    borderColor: "red",
    alignItems: "center",
  },
  selectorDisplay: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  selectorInformation: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default ControllerSelectorNavigation;

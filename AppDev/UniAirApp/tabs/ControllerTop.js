import React, {useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, ButtonGroup, Header } from "react-native-elements";
import TemperatureController from "../components/TemperatureController";
import ControllerInformation from "../components/ControllerInformation";

ControllerTop = props => {
  return (
    <View style = {styles.container}>
    <View style = {styles.TemperatureContainer}>
      <TemperatureController id = {props.id}/>
      </View>
      <View style = {styles.ControlInformationContainer}>
      <ControllerInformation id = {props.id}/>
      </View>
    </View>
  )
}

export default ControllerTop;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  TemperatureContainer: {
    flex: 3.5,
    width : "100%"
  },
  ControlInformationContainer:{
    flex: 1,
    width : "100%"
  }

})

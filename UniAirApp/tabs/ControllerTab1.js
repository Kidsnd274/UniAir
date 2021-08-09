import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, ButtonGroup, Header } from "react-native-elements";
import FanDualButtons from "../components/FanDualButtons";
import EconPowerDualButtons from "../components/EconPowerDualButton";
import FlapDualButtons from "../components/FlapDualButtons";
const ControllerTab1 = props => {

  return (
    <View style={styles.container}>
    <FanDualButtons id = {props.id} style = {{flex:1}}></FanDualButtons>
    <FlapDualButtons id = {props.id} style = {{flex:1}}></FlapDualButtons>
    <EconPowerDualButtons id = {props.id} style = {{flex:1}}></EconPowerDualButtons>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection:'column',
  }
});

export default ControllerTab1;
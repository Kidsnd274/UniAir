import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, ButtonGroup, Header } from "react-native-elements";
import FanDualButtons from "../components/FanDualButtons";
import EconPowerDualButtons from "../components/EconPowerDualButton";

const ControllerTab1 = () => {

  return (
    <View style={styles.container}>
    <FanDualButtons></FanDualButtons>
    <EconPowerDualButtons></EconPowerDualButtons>
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
    borderWidth:2,
    borderColor:'green'
  }
});

export default ControllerTab1;
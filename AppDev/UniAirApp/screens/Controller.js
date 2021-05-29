import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, ButtonGroup, Header } from "react-native-elements";
import FanDualButtons from "../components/FanDualButtons";
import TemperatureController from "../components/TemperatureController";
import ControllerInformation from "../components/ControllerInformation";
import Tabs from "../components/Tabs";
import EconPowerDualButtons from "../components/EconPowerDualButton";

const Controller = props => {
  const name = () => {
    return (<Text>{props.data.roomName}</Text>)
  }
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Header
          placement="left"
          leftComponent={name}
        />
      </View>
      <View style={styles.controllerContainer}>
        <TemperatureController temperatureDisplay = {props.data.temperatureDisplay}/>
        <ControllerInformation />
      </View>
      <View style={styles.tabContainer}>
        <Tabs />
      </View>
      <View style={styles.tabContainer}>
        <FanDualButtons />
        <EconPowerDualButtons></EconPowerDualButtons>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection:'column',
    borderWidth:2,
    borderColor:'black'
  },
  subContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth:2,
    borderColor:'black'
  },
  controllerContainer: {
    flex: 1.5,
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: 'column',
    width:'100%',
    borderWidth:2,
    borderColor:'black'
  },
  tabContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: -50,
    width:'100%',
    borderWidth:2,
    borderColor:'black'
  },
  miscContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth:2,
    borderColor:'black'
  },
});

export default Controller;

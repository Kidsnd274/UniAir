import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, ButtonGroup, Header } from "react-native-elements";
import FanDualButtons from "../components/FanDualButtons";
import TemperatureController from "../components/TemperatureController";
import ControllerInformation from "../components/ControllerInformation";
import Tabs from "../components/Tabs";
import EconPowerDualButtons from "../components/EconPowerDualButton";
import { useDispatch } from "react-redux";
import { fetchAirconData } from "../redux/actions";

const Controller = (props) => {
  const dispatch = useDispatch();

  const name = () => {
    return <Text>{props.data.roomName}</Text>;
  };

  // Logic to prevent app from constantly request to server
  let updateCooldown = false;

  // Update from server after every update
  useEffect(() => {
    console.log("updateCooldown = ", updateCooldown)
    if (updateCooldown == false) {
      timeoutCooldown(5000);
      console.log("running fetch")
      fetchAirconData(
        props.data.ipAddress,
        props.data.port,
        props.data.id,
        dispatch
      );
    } else {
      console.log("Cooldown still running!!")
    }
    // fetchAirconData(props.data.id)(dispatch) // For the new function, but doesn't work
  });

  function timeoutCooldown(cooldownTime) {
    updateCooldown = true;
    setTimeout(() => {
      updateCooldown = false;
    }, cooldownTime);

  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Header placement="left" leftComponent={name} width="100%" />
      </View>
      <View style={styles.controllerContainer}>
        <TemperatureController id={props.data.id} />
        <ControllerInformation />
      </View>
      <View style={styles.tabContainer}>
        <Tabs />
      </View>
      <View style={styles.miscContainer}>
        <FanDualButtons />
        <EconPowerDualButtons></EconPowerDualButtons>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    borderWidth: 2,
    borderColor: "blue",
  },
  subContainer: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 2,
    borderColor: "red",
    width: "100%",
  },
  controllerContainer: {
    flex: 2,
    alignItems: "stretch",
    justifyContent: "flex-end",
    flexDirection: "column",
    width: "100%",
    borderWidth: 2,
    borderColor: "green",
  },
  tabContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
  },
  miscContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "black",
  },
});

export default Controller;

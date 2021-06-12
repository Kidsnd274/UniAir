import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, ButtonGroup, Header } from "react-native-elements";
import FanDualButtons from "../components/FanDualButtons";
import TemperatureController from "../components/TemperatureController";
import ControllerInformation from "../components/ControllerInformation";
import Tabs from "../components/Tabs";
import EconPowerDualButtons from "../components/EconPowerDualButton";
import { useSelector } from "react-redux";
import { fetchAirconData } from "../redux/actions";
import ControllerTab2 from "../tabs/ControllerTab2";
import ControllerTab1 from "../tabs/ControllerTab1";
import ControllerTop from "../tabs/ControllerTop";

const Controller = (props) => {
  const controllerData = useSelector(
    (state) => state.airconReducer.aircons[props.data.id]
  );

  const [aircon_tab, set_aircon_tab] = useState(controllerData.aircon_tab);

  const name = () => {
    return <Text>{props.data.roomName}</Text>;
  };

  const tabsFunction = () => {
    console.log("Tabs Function" + controllerData.aircon_tab);
    switch (controllerData.aircon_tab) {
      case "1":
        return <ControllerTab1 id={props.data.id} />;
      case "2":
        return <ControllerTab2 id={props.data.id} />;
      default:
        return <ControllerTab1 id={props.data.id} />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Header placement="left" leftComponent={name} width="100%" flex={1} />
      </View>
      <View style={styles.controllerContainer}>
        <ControllerTop id={props.data.id} />
      </View>
      <View style={styles.tabContainer}>
        <Tabs id={props.data.id} />
      </View>
      <View style={styles.miscContainer}>
        {/* <ControllerTab1 id={props.data.id} /> */}
        {tabsFunction()}
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
    flex: 0.7,
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 2,
    borderColor: "red",
    width: "100%",
  },
  controllerContainer: {
    flex: 3,
    alignItems: "flex-end",
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
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "black",
  },
});

export default Controller;

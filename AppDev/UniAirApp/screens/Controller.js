import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, ButtonGroup, Header, Icon } from "react-native-elements";
import FanDualButtons from "../components/FanDualButtons";
import TemperatureController from "../components/TemperatureController";
import ControllerInformation from "../components/ControllerInformation";
import Tabs from "../components/Tabs";
import EconPowerDualButtons from "../components/EconPowerDualButton";
import SchedulerController from "../components/SchedulerController";
import ControllerTab2 from "../tabs/ControllerTab2";
import ControllerTab1 from "../tabs/ControllerTab1";
import ControllerTop from "../tabs/ControllerTop";

const Controller = (props) => {


  // const MiscButton = () => {
  //   return (
  //     <TouchableOpacity
  //       style={styles.touchableStyle}
  //       onPress={() => setTabState("1")}
  //     >
  //       <Text>
  //         <Icon name="fan" type="material-community" size={30} />
  //       </Text>
  //     </TouchableOpacity>
  //   );
  // };

  // const SchedulerButton = () => {
  //   return (
  //     <TouchableOpacity
  //       style={styles.touchableStyle}
  //       onPress={() => setTabState("2")}
  //     >
  //       <Text>
  //         <Icon
  //           name="clock-time-eight-outline"
  //           type="material-community"
  //           size={30}
  //         />
  //       </Text>
  //     </TouchableOpacity>
  //   );
  // };

  // const OtherButton = () => {
  //   return (
  //     <TouchableOpacity
  //       style={styles.touchableStyle}
  //       onPress={() =>  setTabState("3")}
  //     >
  //       <Text>
  //         <Icon
  //           name="weather-partly-lightning"
  //           type="material-community"
  //           size={30}
  //         />
  //       </Text>
  //     </TouchableOpacity>
  //   );
  // };

  // const buttons = [
  //   { element: MiscButton },
  //   { element: SchedulerButton },
  //   { element: OtherButton },
  // ];

  // const Tab2 = () => {
  //   return (
  //     <ButtonGroup
  //       buttons={buttons}
  //       containerStyle={{ height: 50, width: "90%" }}
  //       flex={1}
  //     />
  //   );
  // };

  const name = () => {
    return <Text>{props.data.roomName}</Text>;
  };

  function Tabs() {
    switch (tabState) {
      case "1":
        return <ControllerTab1/>
      case "2":
        return <ControllerTab2/>
      default:
        return <ControllerTab1/>
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Header placement="left" leftComponent={name} width="100%" flex={1} />
      </View>
      <View style={styles.controllerContainer}>
        <ControllerTop id={props.data.id} />
      </View>
      <View style={styles.tabContainer}>
        <Tab2/>
      </View>
      <View style={styles.miscContainer}>
        {Tabs()}
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
  },
  subContainer: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 2,
    width: "100%",
  },
  controllerContainer: {
    flex: 3,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "column",
    width: "100%",
  },
  tabContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  miscContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export default Controller;

import React, { useEffect, useState } from "react";
import { Appbar } from "react-native-paper";
import { Text, View, StyleSheet, Modal, Alert } from "react-native";
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
import ControllerAppBar from "../components/appbar/ControllerAppBar";
import ControllerEditor from "./ControllerEditor";
import SchedulerScreen from "../components/SchedulerScreen";

const Controller = (props) => {
  const controllerData = useSelector(
    (state) => state.airconReducer.aircons[props.data.id]
  );

  const aircon_tab = useSelector(
    (state) => state.airconReducer.aircons[props.data.id].aircon_tab
  );

  const [settingsModal, setSettingsModal] = useState(false);
  const [schedulerModal, setSchedulerModal] = useState(false)

  // const [aircon_tab, set_aircon_tab] = useState(controllerData.aircon_tab);

  const name = () => {
    return <Text>{props.data.roomName}</Text>;
  };

  const tabsFunction = () => {
    console.log("Tabs Function" + aircon_tab);
    switch (aircon_tab) {
      case "1":
        return <ControllerTab1 id={props.data.id} />;
      case "2":
        return <ControllerTab2 id={props.data.id} schedulerModal  = {SchedulerModalVisible}/>;
      default:
        return <ControllerTab1 id={props.data.id} />;
    }
  };

  const SettingModalVisible = () => {setSettingsModal(!settingsModal)}
  const SchedulerModalVisible = () => {setSchedulerModal(!schedulerModal)}

  return (
    <View style={styles.container}>
      <ControllerAppBar data={props.data} settingModal = {SettingModalVisible}/>
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
      <Modal
        animationType="slide"
        visible={settingsModal}
        onRequestClose={() => {
          setSettingsModal(!settingsModal)
        }}
      >
        <ControllerEditor data = {props.data}/>
      </Modal>
      <Modal
        animationType="slide"
        visible={settingsModal}
        onRequestClose={() => {
          setSettingsModal(!settingsModal)
        }}
      >
        <ControllerEditor data = {props.data}/>
      </Modal>

      <Modal
        animationType="slide"
        visible={schedulerModal}
        onRequestClose={() => {
          setSchedulerModal(!schedulerModal)
        }}
      >
        <SchedulerScreen data = {props.data} schedulerModal = {SchedulerModalVisible}/>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  subContainer: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "flex-start",
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
  },
});

export default Controller;

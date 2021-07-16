import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform, StyleSheet, Alert, ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { updateAirconData } from "../../redux/actions";

const ControllerAppBar = (props) => {

  const navigationRaw = useNavigation();
  const title = props.data.roomName

  function notifyMessage(msg) {
    if (Platform.OS == "android") {
      ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
      Alert.alert(msg)
    }
  }

  const refreshControllerData = () => {
    if (props.data.testController) {
      notifyMessage("Test Controller, no data refreshed")
    } else {
      updateAirconData(props.data.id)
      notifyMessage("Data refresh attempted")
    }
  }

  return (
    <Appbar.Header style = {styles.header}>
      <Appbar.Action icon="arrow-left" onPress={() => navigationRaw.goBack()} color = "#FFFF" />
      <Appbar.Content title= {title} />
      <Appbar.Action icon="menu-down-outline" onPress={() => {props.settingModal()}} color = "#FFFF"/>
      <Appbar.Action icon="sync" onPress={refreshControllerData} color = "#FFFF" />
    </Appbar.Header>
  );
}
export default ControllerAppBar;

const styles = StyleSheet.create({header: {
  backgroundColor: "#00B4D8",
  width: "100%"
}})
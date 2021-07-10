import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";

const ControllerAppBar = (props) => {

  const navigationRaw = useNavigation();
  const title = props.data.roomName

  return (
    <Appbar.Header style = {styles.header}>
      <Appbar.Action icon="arrow-left" onPress={() => navigationRaw.goBack()} color = "#FFFF" />
      <Appbar.Content title= {title} />
      <Appbar.Action icon="menu-down-outline" onPress={() => {props.settingModal()}} color = "#FFFF"/>
      <Appbar.Action icon="sync" onPress={() => {console.log("Sam Put In Your Function Here")}} color = "#FFFF" />
    </Appbar.Header>
  );
}
export default ControllerAppBar;

const styles = StyleSheet.create({header: {
  backgroundColor: "#00B4D8",
  width: "100%"
}})
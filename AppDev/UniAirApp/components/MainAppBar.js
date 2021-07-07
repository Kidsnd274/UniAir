import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";

const MainAppBar = (props) => {

  const navigation = useNavigation();

  return (
    <Appbar.Header style = {styles.header}>
      <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} color = "#FFFF" />
      <Appbar.Content title= {props.title} />
    </Appbar.Header>
  );
}
export default MainAppBar;

const styles = StyleSheet.create({header: {
  backgroundColor: "#00B4D8",
}})
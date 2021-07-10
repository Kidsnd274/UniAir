import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";

const MainAppBar = ({scene,navigation}) => {

  const navigationRaw = useNavigation();
  const {options}=scene.descriptor;
  const title = options.headerTitle;

  return (
    <Appbar.Header style = {styles.header}>
      <Appbar.Action icon="menu" onPress={() => navigationRaw.openDrawer()} color = "#FFFF" />
      <Appbar.Content title= {title} />
    </Appbar.Header>
  );
}
export default MainAppBar;

const styles = StyleSheet.create({header: {
  backgroundColor: "#00B4D8",
}})
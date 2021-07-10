import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";

const SchedulerAppBar = (props) => {
  const title = props.data.roomName;

  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Action
        icon="arrow-left"
        onPress={() => {
          props.schedulerModal();
        }}
        color="#FFFF"
      />
      <Appbar.Content title={title} titleStyle = {{color: "#FFFF"}} style = {{}}/>
    </Appbar.Header>
  );
};
export default SchedulerAppBar;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00B4D8",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
});

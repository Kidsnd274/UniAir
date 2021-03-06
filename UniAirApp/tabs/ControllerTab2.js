import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  Button,
  ButtonGroup,
  Header,
  ListItem,
  Icon,
} from "react-native-elements";
import SchedulerController from "../components/SchedulerController";
import { useSelector } from "react-redux";
import { deleteScheduler } from "../redux/actions";

const ControllerTab2 = (props) => {
  const scheduler = useSelector(
    (state) => state.airconReducer.aircons[props.id].scheduler
  );
  console.log(scheduler);

  function Schedule(x, index) {
    return (
      <View style={styles.item}>
        <View style = {styles.object}>
          <Text>{x.date}</Text>
          <Text>{x.time}</Text>
        </View>
        <TouchableOpacity onPress = {() => deleteScheduler(index)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.scheduleList}>
        <ScrollView>{scheduler.map((x, index) => Schedule(x, index))}</ScrollView>
      </View>
      <View style={styles.schedulerContainer}>
        <TouchableOpacity
          onPress={() => props.schedulerModal()}
          style={styles.addSchedule}
        >
          <Text>Add Instruction</Text>
          <Icon name="add" type="ionicons" />
        </TouchableOpacity>
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
    width: "100%",
    height: "100%",
  },
  schedulerContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  scheduleList: {
    flex: 4,
    // borderWidth:1,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  scrollContainer: {
    width: "100",
    flex: 1,
  },
  item: {
    marginTop: 24,
    padding: 20,
    flexDirection: "row",
    width: "90%",
    alignItems: "stretch",
    justifyContent: "space-evenly",
    backgroundColor: "#A7E5FF",
    borderRadius: 15,
  },
  addSchedule: {
    width: "80%",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    height: "80%",
    alignItems: "center",
    borderRadius: 5,
  },
  object: {
    flexDirection: "column"
  }
});

export default ControllerTab2;

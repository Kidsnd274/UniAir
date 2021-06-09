import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Button, ButtonGroup, Header, ListItem } from "react-native-elements";
import SchedulerController from "../components/SchedulerController";

const ControllerTab2 = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  function Schedule(x) {
    return (
      <View style={styles.item}>
        <Text>{x.title}</Text>
        <TouchableOpacity><Text>Delete</Text></TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
    <View style={styles.schedulerContainer}>
      <SchedulerController></SchedulerController>
    </View>
    <View style={styles.scheduleList}>
      <ScrollView >{DATA.map((x) => Schedule(x))}</ScrollView>
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
    width: "100%",
  },
  schedulerContainer: {
    flex : 1,
    justifyContent: "center"
  },
  scheduleList: {
    flex: 4
  },
  scrollContainer: {
    width : "100",
    flex:1,
  },
  item: {
    marginTop: 24,
    padding: 20,
    flexDirection: "row",
    width: "90%",
    alignItems:"stretch",
    justifyContent: "space-evenly",
    backgroundColor: '#A7E5FF',
    borderRadius: 15
  },
});

export default ControllerTab2;

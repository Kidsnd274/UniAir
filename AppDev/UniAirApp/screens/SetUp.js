import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const SetUp = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  subContainerTop: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#FFFF",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  subContainerBottom: {
    flex: 2,
    backgroundColor: "#00B4D8",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    padding: "10%",
  },

  textRegister: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 20,
    paddingTop: "2.2%",
    color: "black",
  },

  tagLine: {
    justifyContent: "flex-start",
    textAlign: "center",
    alignItems: "center",
    fontSize: 20,
    paddingBottom: "100%",
    color: "black",
  },

  textLearnMore: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 20,
    paddingTop: "2.2%",
    color: "#FFFF",
  },
  buttonStyleLearnMore: {
    flexDirection: "row",
    backgroundColor: "#00B4D8",
    borderRadius: 30,
    width: "75%",
    height: "10%",
    margin: 10,
    borderWidth: 2,
    borderColor: "#FFFF",
    justifyContent: "center",
  },
  buttonStyleRegister: {
    flexDirection: "row",
    backgroundColor: "#FFFF",
    borderRadius: 30,
    width: "75%",
    height: "10%",
    margin: 10,
    justifyContent: "center",
  },
});

export default StartUp;

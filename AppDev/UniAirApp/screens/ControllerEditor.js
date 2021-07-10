import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, ButtonGroup, Header } from "react-native-elements";
import { useSelector } from "react-redux";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { removeController } from "../redux/actions";
import { useNavigation } from "@react-navigation/native";

const ControllerEditor = (props) => {
  const controllerData = useSelector(
    (state) => state.airconReducer.aircons[props.data.id]
  );

  const check = () => {
    if (typeof props.settingModal === "undefined") {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate("Controllers")}
          style={{ ...styles.submitTouchable, backgroundColor: "red" }}
        >
          <Text style={styles.submitText}>BACK</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => {
          [props.settingModal()];
        }}
        style={{ ...styles.submitTouchable, backgroundColor: "red" }}
      >
        <Text style={styles.submitText}>BACK</Text>
      </TouchableOpacity>
    );
  };
  const navigation = useNavigation();

  const [roomName, setRoomName] = useState(controllerData.roomName);
  const [ipAddress, setIpAdress] = useState(controllerData.ipAddress);
  const [port, setPort] = useState(controllerData.port);

  return (
    <View style={styles.container}>
      <View style = {styles.headerView}>
        <Text style={{ fontSize: 20, textDecorationLine: "underline" }}>
          Controller Information
        </Text>
      </View>

      <View style={styles.subContainer}>
        <TextInput
          label="Room Name"
          value={roomName}
          onChange={(x) => setRoomName(x)}
          style={styles.textInputStyles}
        />
      </View>
      <View style={styles.subContainer}>
        <TextInput
          label="Ip Address"
          value={ipAddress}
          onChange={(x) => setIpAdress(x)}
          style={styles.textInputStyles}
        />
      </View>
      <View style={styles.subContainer}>
        <TextInput
          label="Port"
          value={port}
          onChange={(x) => setPort(x)}
          style={styles.textInputStyles}
        />
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Controllers")}
          style={{ ...styles.submitTouchable, backgroundColor: "red" }}
        >
          <Text style={styles.submitText}>BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitTouchable}>
          <Text style={styles.submitText}>SUBMIT CHANGES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => removeController(props.data.id)}
          style={{ ...styles.submitTouchable, backgroundColor: "red" }}
        >
          <Text style={styles.submitText}>DELETE CONTROLLER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  subContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  textInputStyles: { width: "80%" },
  submitTouchable: {
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#00D100",
    width: "60%",
    height: 50,
    justifyContent: "center",
    marginVertical: 10,
  },
  submitText: { color: "#FFFF" },
  headerView: {
    justifyContent : "center",
    alignItems: "center",
    paddingTop: 10
  }
});

export default ControllerEditor;

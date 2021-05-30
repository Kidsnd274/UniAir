import React, { useState, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { useDispatch } from "react-redux";

const Registration = () => {
  const [roomName, setRoomName] = useState("3");
  const [ipAddress, setIpAddress] = useState(0);
  const [portNo, setPortNo] = useState(0);

  const dispatch = useDispatch();

  const submitNewController = () => {
    dispatch({
      type: "ADD_CONTROLLER",
      payload: {
        roomName: roomName,
        ipAddress: ipAddress,
        portNo: portNo,
      },
    });
  };


  return (
    <View style={styles.container}>
      <Input
        placeholder="RoomName"
        leftIcon={{ type: "material-community", name: "serial-port" }}
        onChangeText={(x) => setRoomName(x)}
      />
      <Input
        placeholder="IP Address"
        leftIcon={{ type: "material-community", name: "web" }}
        onChangeText={(x) => setIpAddress(x)}
      />
      <Input
        placeholder="Port Number"
        leftIcon={{ type: "material-community", name: "serial-port" }}
        onChangeText={(x) => setPortNo(x)}
      />
      <Button
        title="Submit"
        containerStyle={styles.buttonStyle}
        onPress={submitNewController}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderWidth: 2,
    borderColor: "black",
  },
  buttonStyle: {
    width: "70%",
  },
});

export default Registration;

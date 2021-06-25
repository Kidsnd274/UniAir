import React, { useState, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { addController, removeController } from '../redux/actions'

const Registration = () => {
  const [roomName, setRoomName] = useState("3");
  const [ipAddress, setIpAddress] = useState(5000);
  const [portNo, setPortNo] = useState(0);
  const [airconModel, setAirconModel] = useState("Mitsubishi");

  const submitNewController = () => {
    addController(ipAddress, portNo, roomName, airconModel);
  };

  const removeConc = () => {
    removeController(1);
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Room Name"
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
      <Input
        placeholder="Aircon Model"
        leftIcon={{ type: "material-community", name: "serial-port" }}
        onChangeText={(x) => setAirconModel(x)}
      />
      <Button
        title="Submit"
        containerStyle={styles.buttonStyle}
        onPress={submitNewController}
      />
      <Button
        title="Remove"
        containerStyle={styles.buttonStyle}
        onPress={removeConc}
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

import React, { useState, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Input, Icon } from "react-native-elements";
import { addController, removeController } from '../redux/actions'
import { useNavigation } from "@react-navigation/core";
import { Button } from "react-native-paper";

const Registration = () => {
  const [roomName, setRoomName] = useState("3");
  const [ipAddress, setIpAddress] = useState(5000);
  const [portNo, setPortNo] = useState(0);
  const [airconModel, setAirconModel] = useState("Mitsubishi");
  const navigation = useNavigation()

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
      {/* <Button
        title="Back"
        containerStyle={styles.buttonStyle}
        onPress={() => navigation.navigate("Welcome")}
      /> */}
      <Button mode = "outlined" style = {styles.buttonStyle} onPress = {() => navigation.navigate("Welcome")}><Text>Back</Text></Button>
      <Button mode = "contained" style = {styles.buttonStyle} onPress = {submitNewController}><Text>Submit</Text></Button>
      {/* <Button
        title="Submit"
        containerStyle={styles.buttonStyle}
        onPress={submitNewController}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderColor: "black",
  },
  buttonStyle: {
    width: "80%",
    justifyContent: "center",
    marginVertical: 20
  },
});

export default Registration;

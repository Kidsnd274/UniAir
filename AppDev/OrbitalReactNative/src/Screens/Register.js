import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
// import {Picker} from 'native-base';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Picker,
  TouchableOpacity,
} from "react-native";

const Register = () => {
  return (
    <View style={styles.container}>
      <View style = {{height: 80, width: "100%", backgroundColor: 'red' ,marginBottom: 100}}><Text>Test</Text></View>

      <TextInput
        style={styles.inputView}
        placeholder="Room Name"
        placeholderTextColor="black"
      />
      <Picker
        style={{
          height: 50,
          width: "70%",
          marginBottom: 100,
          textAlign: "center",
          fontSize: 20
        }}
      >
        <Picker.Item label="a" value="a" />
        <Picker.Item label="a" value="a" />
        <Picker.Item label="a" value="a" />
      </Picker>

      <TouchableOpacity style={styles.TouchableOpacityRegister}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#add8e6",
    alignItems: "center",
    justifyContent: "center",
  },

  userInput: {
    height: 10,
    marginBottom: 100,
    width: "70%",
    textAlign: "center",
    marginLeft: 20,
  },

  inputView: {
    backgroundColor: "#add8e6",
    borderRadius: 30,
    width: "70%",
    height: 60,
    marginBottom: 50,
    alignItems: "center",
    textAlign:'center'
  },

  TouchableOpacityRegister: {
    width: "70%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 25,
    backgroundColor: "#d3d3d3",
    marginBottom: 110,
    textAlign: "center",
  },
});

export default Register;

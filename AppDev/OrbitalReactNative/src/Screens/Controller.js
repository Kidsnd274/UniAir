import React, { Component, useContext, useState } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";
import ControllerView from "../Compenents/ControllerView";
import TemperatureController from "../Compenents/TemperatureController";
import { ControllerProvider } from "../Context/ControllerContext";

const Controller = ({ navigation }) => {
  return (
    <ControllerProvider>
      <View
        style={{
          height: 80,
          width: "100%",
          backgroundColor: "red",
          marginTop: 10,
        }}
      >
        <Text>Test</Text>
      </View>
      <View>
        <Picker
          style={{
            height: 50,
            textAlign: "center",
          }}
        >
          <Picker.Item label="a" value="a" />
          <Picker.Item label="a" value="a" />
          <Picker.Item label="a" value="a" />
        </Picker>
      </View>
      <View style={styles.containerStyle}>
        <ControllerView />
      </View>
      <View style={{ height: 50 }}></View>
      <View style={styles.controllerStyle}>
        <TemperatureController />
      </View>
    </ControllerProvider>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  controllerStyle: {
    flex: 1.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Controller;

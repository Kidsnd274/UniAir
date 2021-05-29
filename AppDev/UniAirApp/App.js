import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartUp from './screens/StartUp';
import FanDualButtons from './components/FanDualButtons'
import TemperatureController from './components/TemperatureController';
import ControllerInformation from './components/ControllerInformation'
import Tabs from './components/Tabs'
import Controller from './screens/Controller'



export default function App() {
  return (
    <Controller/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React, { Component } from "react";
// import { View } from "react-native";
// import CircleSlider from "react-native-circle-slider";

// export default function App() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <CircleSlider value={90} />
//     </View>
//   );
// }

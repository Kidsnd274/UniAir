import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StartUp from './screens/StartUp';
import FanDualButtons from './components/FanDualButtons'
import TemperatureController from './components/TemperatureController';
import ControllerInformation from './components/ControllerInformation'
import Tabs from './components/Tabs'
import Controller from './screens/Controller'
import Registration from './screens/Registration'
import SetUp from './screens/SetUp'



export default function App() {
  const dataSet = [{roomName:'Room1', temperatureDisplay: 'b'}, {roomName:'room2', temperatureDisplay: 'd'}, {roomName:'room3', temperatureDisplay: 'c'}]
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="SetUp">
        <Drawer.Screen name="SetUp" component={SetUp} />
        <Drawer.Screen name="Registration" component={Registration} />
        <Drawer.Screen name="StartUp" component={StartUp} />
        {dataSet.map(x => <Drawer.Screen name= {x.roomName} component= {ControllerCreater(x)} />)}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function ControllerCreater(dataSet) {
  return () => {
    return(<Controller data = {dataSet}/>)
  }
}

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

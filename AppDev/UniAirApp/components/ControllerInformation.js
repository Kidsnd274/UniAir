import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, ButtonGroup, Icon, Tab } from "react-native-elements";

const ControllerInformation = props => {
  
  return (
    <View style = {styles.container}>
      <View style = {styles.subContainer}><Icon name="tree" type = 'entypo' /></View>
      <View style = {styles.subContainer}><Icon name="fan" type = 'material-community' /></View>
      <View style = {styles.subContainer}><Icon name="weather-sunny" type = 'material-community' /></View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  subContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor:'green',
    width: "25%",
    margin: 10,
    borderRadius: 10
  }
});

export default ControllerInformation;
import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, ButtonGroup, Icon } from "react-native-elements";


const TemperatureController = props => {
  

  return (
    <View style = {styles.container}>
      <TouchableOpacity style = {styles.touchableStyle}><Icon name="minus" type = 'material-community' size = {50}/></TouchableOpacity>
      <View style ={styles.circle}><Text style = {styles.temperatureText}>{props.temperatureDisplay}<Icon name="temperature-celsius" type = 'material-community' /></Text></View>
      <TouchableOpacity style = {styles.touchableStyle}><Icon name="plus" type = 'material-community' size = {50}/></TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  touchableStyle: {
    margin: 20
  }
  ,
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#FFFF',
    borderWidth: 5,
    borderColor: "blue",
    justifyContent: 'center',
    alignItems: 'center'
 },
 temperatureText: {
   fontSize: 50,
   justifyContent:'center'
 },
 temperatureIcons: {
  fontSize: 50,
  justifyContent:'center'
}


})

  export default TemperatureController;
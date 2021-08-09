import React, { useState } from "react";
import { Alert } from "react-native";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, ButtonGroup, Icon } from "react-native-elements";
import { max } from "react-native-reanimated";
import { useSelector } from "react-redux";
import { updateFanSpeed } from "../redux/actions";

const FanDualButtons = (props) => {

  const aircon_fanspeed = useSelector(
    (state) => state.airconReducer.aircons[props.id].controllerData.aircon_fanspeed
  );
  
  const max_aircon_fanspeed = useSelector(
    (state) => state.airconReducer.aircons[props.id].controllerConfig.max_aircon_fanspeed
  );

  const min_aircon_fanspeed = useSelector(
    (state) => state.airconReducer.aircons[props.id].controllerConfig.min_aircon_fanspeed
  );


  const increaseFanSpeed = () => {
    
    var newValue = aircon_fanspeed + 1;

    if (newValue > max_aircon_fanspeed) {
      console.log(max_aircon_fanspeed)
      console.log("LOG: Error, Invalid Value")
      Alert.alert("Invalid Value", "Max FanSpeed")
    }
    else{
      updateFanSpeed(props.id, newValue);
    }

  };

  const decreaseFanSpeed = () => {
    var newValue = aircon_fanspeed - 1;
    
    if (newValue < min_aircon_fanspeed) {
      console.log("LOG: Error, Invalid Value")
      Alert.alert("Invalid Value", "Min FanSpeed")
    }
    else{
      updateFanSpeed(props.id, newValue);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.TextStyle} onPress={increaseFanSpeed}>
        <Icon name="fan-chevron-up" type="material-community" /><Text>Fan Speed /\</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.TextStyle} onPress={decreaseFanSpeed}>
        <Icon name="fan-chevron-down" type="material-community" /><Text>Fan Speed \/</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FanDualButtons;

const styles = StyleSheet.create({
  TextStyle: {
    justifyContent: "center",
    flex: 1,
    borderWidth: 2,
    alignItems: "center"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    padding: 5
  },
});

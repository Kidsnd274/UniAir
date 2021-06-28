import React, { useState } from "react";
import { Alert } from "react-native";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, ButtonGroup, Icon } from "react-native-elements";
import { max } from "react-native-reanimated";
import { useSelector } from "react-redux";
import { updateFlap } from "../redux/actions";

const FlapDualButtons = (props) => {

  const aircon_flap = useSelector(
    (state) => state.airconReducer.aircons[props.id].controllerData.aircon_flap
  );
  
  const max_aircon_flap = useSelector(
    (state) => state.airconReducer.aircons[props.id].controllerConfig.max_aircon_flap
  );

  const min_aircon_flap = useSelector(
    (state) => state.airconReducer.aircons[props.id].controllerConfig.min_aircon_flap
  );


  const increaseFlap= () => {
    
    var newValue = aircon_flap+ 1;

    if (newValue > max_aircon_flap) {
      console.log(max_aircon_flap)
      console.log("LOG: Error, Invalid Value")
      Alert.alert("Invalid Value", "Max FanFlap")
    }
    else{
      updateFlap(props.id, newValue);
    }

  };

  const decreaseFlap = () => {
    var newValue = aircon_flap - 1;
    
    if (newValue < min_aircon_flap) {
      console.log("LOG: Error, Invalid Value")
      Alert.alert("Invalid Value", "Min FanFlap")
    }
    else{
      updateFlap(props.id, newValue);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.TextStyle} onPress={increaseFlap}>
        <Icon name="fan-chevron-up" type="material-community" /><Text>Fan Vane /\</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.TextStyle} onPress={decreaseFlap}>
        <Icon name="fan-chevron-down" type="material-community" /><Text>Fan Vane \/</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlapDualButtons;

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

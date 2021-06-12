import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, ButtonGroup, Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { updateFanSpeed } from "../redux/actions";

const FanDualButtons = (props) => {
  const controllerData = useSelector(
    (state) => state.airconReducer.aircons[props.id]
  );
  const [aircon_fanspeed, set_aircon_fanspeed] = useState(
    controllerData.controllerData.aircon_fanspeed
  );

  const increaseFanSpeed = () => {
    var newValue = aircon_fanspeed + 1;
    set_aircon_fanspeed(newValue);
    updateFanSpeed(props.id, newValue);
  };

  const decreaseFanSpeed = () => {
    var newValue = aircon_fanspeed - 1;
    set_aircon_fanspeed(newValue);
    updateFanSpeed(props.id, newValue);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.TextStyle} onPress={increaseFanSpeed}>
        <Icon name="fan-chevron-up" type="material-community" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TextStyle} onPress={decreaseFanSpeed}>
        <Icon name="fan-chevron-down" type="material-community" />
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
  },
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    padding: 5
  },
});

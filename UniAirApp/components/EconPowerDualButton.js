import React, {useState} from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, ButtonGroup, Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { toggleEcoMode, togglePowerMode } from "../redux/actions"

const EconPowerDualButtons = props => {
  const controllerData = useSelector(
    (state) => state.airconReducer.aircons[props.id]
  );
  // const [aircon_eco_mode, set_aircon_eco_mode] = useState(
  //   controllerData.controllerData.aircon_eco_mode
  // );
  // const [aircon_powerful_mode, set_aircon_powerful_mode] = useState(
  //   controllerData.controllerData.aircon_powerful_mode
  // );

  const aircon_eco_mode = useSelector(
    (state) => state.airconReducer.aircons[props.id].controllerData.aircon_eco_mode
  );

  const aircon_powerful_mode = useSelector(
    (state) => state.airconReducer.aircons[props.id].controllerData.aircon_powerful_mode
  );

  const onEcoChanged = () => {
    var newValue = aircon_eco_mode ? false : true;
    toggleEcoMode(props.id, newValue);
  }

  const onPowerModeChanged = () => {
    var newValue = aircon_powerful_mode ? false : true;
    togglePowerMode(props.id, newValue);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.TextStyle} onPress = {onEcoChanged}>
        <Icon name="tree" type="entypo" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TextStyle} onPress = {onPowerModeChanged}>
        <Icon name="snowflake" type="material-community" />
      </TouchableOpacity>
    </View>
  );
};

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
    padding: 5,
  },
});

export default EconPowerDualButtons;

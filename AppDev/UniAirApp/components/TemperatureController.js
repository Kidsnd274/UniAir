import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { Button, ButtonGroup, Icon } from "react-native-elements";
import { State } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import {
  changeTemperature,
  togglePower,
} from "../redux/actions";

const TemperatureController = (props) => {
  const controllerData = useSelector(
    (state) => state.airconReducer.aircons[props.id]
  );

  const aircon_power = useSelector(
    (state) => state.airconReducer.aircons[props.id].controllerData.aircon_power
  );

  const [aircon_temp, set_aircon_temp] = useState(
    controllerData.controllerData.aircon_temp
  );


  function Power(status, temp) {
    if (status) {
      return (
        <Text style={styles.temperatureText}>
          {String(aircon_temp)}
          <Icon name="temperature-celsius" type="material-community" />
        </Text>
      );
    }
    return (
      <Text style={styles.temperatureText}>
        <Icon name="power" type="material-community" size = {60}/>
      </Text>
    );
  }

  const onPowerChanged = () => {
    var newValue = aircon_power ? false : true;
    togglePower(props.id, newValue);
  };

  const increaseTemperature = () => {
    var newValue = aircon_temp + 1;
    changeTemperature(props.id, newValue);
  };

  const decreaseTemperature = () => {
    var newValue = aircon_temp - 1;
    changeTemperature(props.id, newValue);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableStyle}
        onPress={decreaseTemperature}
      >
        <Icon name="minus" type="material-community" size={50} />
      </TouchableOpacity>
      <View style={styles.circle}>
        <TouchableOpacity style={styles.circle} onPress={onPowerChanged}>
          <Text style={styles.temperatureText}>
            {Power(aircon_power, aircon_temp)}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.touchableStyle}
        onPress={increaseTemperature}
      >
        <Icon name="plus" type="material-community" size={50} />
      </TouchableOpacity>
    </View>
  );
};

export default TemperatureController;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  touchableStyle: {
    margin: "5%",
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#FFFF",
    borderWidth: 5,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  temperatureText: {
    fontSize: 50,
    justifyContent: "center",
  },
  temperatureIcons: {
    fontSize: 50,
    justifyContent: "center",
  },
});

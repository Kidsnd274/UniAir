import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { Button, ButtonGroup, Icon } from "react-native-elements";
import { State } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { changeTemperature, togglePower } from "../redux/actions"

const TemperatureController = (props) => {
  const controllerData = useSelector(state => state.airconReducer.aircons[props.id])

  const [aircon_power, set_aircon_power] = useState(controllerData.controllerData.aircon_power)
  const [aircon_temp, set_aircon_temp] = useState(controllerData.controllerData.aircon_temp);

  const dispatch = useDispatch();

  function Power(status, temp) {
    if (status) {
      return temp;
    }
    return "-";
  }

  const onPowerChanged = () => {
    var newValue = aircon_power ? false : true;
    set_aircon_power(newValue);
    togglePower(props.id, newValue);
  }

  const increaseTemperature = () => {
    var newValue = aircon_temp + 1;
    set_aircon_temp(newValue);
    changeTemperature(props.id, newValue);
  }

  const decreaseTemperature = () => {
    debugCall();
    var newValue = aircon_temp - 1;
    set_aircon_temp(newValue);
    changeTemperature(props.id, newValue);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableStyle}
        onPress={decreaseTemperature}
      >
        <Icon name="minus" type="material-community" size={50} />
      </TouchableOpacity>
      <View style={styles.circle}>
        <TouchableOpacity
          style={styles.circle}
          onPress={onPowerChanged}>
          <Text style={styles.temperatureText}>
            {String(Power(aircon_power, aircon_temp))}
            <Icon name="temperature-celsius" type="material-community" />
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  touchableStyle: {
    margin: 20,
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

  // const dispatch = useDispatch();



  // const fetchAirconData = () => dispatch(getAirconData());
  // useEffect(() => {
  //   fetchAirconData();
  // }, [])

  // const SubmitSettings = () => {
  //   dispatch({
  //     type: "SUBMIT_TEMPERATURE",
  //     payload: {
  //       id: airConditionerId,
  //       aircon_power: aircon_power,
  //       aircon_temp: aircon_temp,
  //     },
  //   });
  // };

  // const SubmitPower = () => {
  //   dispatch({
  //     type: "SUBMIT_POWER",
  //     payload: {
  //       id: airConditionerId,
  //       aircon_power: aircon_power,
  //       aircon_temp: aircon_temp,
  //     },
  //   });
  // };
import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { Button, ButtonGroup, Icon } from "react-native-elements";
import { useDispatch } from "react-redux";

const TemperatureController = (props) => {
  const [power, setPower] = useState(props.data.controllerData.Power);
  const [temperatureDisplay, setTemperatureDisplay] = useState(
    props.data.controllerData.temperatureDisplay
  );
  const [airConditionerId, setAirConditionerId] = useState(
    props.data.controllerData.Id
  );

  const dispatch = useDispatch();


  function Power(status, temp) {
    if (status) {
      return temp;
    }
    return "-";
  }

  const SubmitSettings = () => {
    dispatch({
      type: "SUBMIT_TEMPERATURE",
      payload: {
        id: airConditionerId,
        power: power,
        temperatureDisplay: temperatureDisplay,
      },
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableStyle}
        onPress={SubmitSettings}
        onPressIn={() => setTemperatureDisplay(temperatureDisplay - 1)}
      >
        <Icon name="minus" type="material-community" size={50} />
      </TouchableOpacity>
      <View style={styles.circle}>
        <TouchableOpacity
          style={styles.circle}
          onPressIn={() => setPower(power ? false : true)}
          onPress={SubmitSettings}
        >
          <Text style={styles.temperatureText}>
            {String(Power(power, temperatureDisplay))}
            <Icon name="temperature-celsius" type="material-community" />
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.touchableStyle}
        onPress={SubmitSettings}
        onPressIn={() => setTemperatureDisplay(temperatureDisplay + 1)}
      >
        <Icon name="plus" type="material-community" size={50} />
      </TouchableOpacity>
    </View>
  );
};

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

export default TemperatureController;

import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import { Button } from "react-native-paper";
import SchedulerController from "./SchedulerController";
import { useSelector } from "react-redux";

const SchedulerScreen = () => {
  
  const controllerData = useSelector(
    // (state) => state.airconReducer.aircons[props.data.id]
    (state) => state.airconReducer.aircons[0]
  );

  const [aircon_fanspeed, setstate_aircon_fanspeed] = useState(controllerData.controllerData.aircon_fanspeed)
  const [aircon_flap, setstate_aircon_flap] = useState(controllerData.controllerData.aircon_flap)
  const [aircon_eco_mode, setstate_aircon_eco_mode] = useState(controllerData.controllerData.aircon_eco_mode)
  const [aircon_powerful_mode, setstate_aircon_powerful_mode] = useState(controllerData.controllerData.aircon_powerful_mode)
  const [date, setDate] = useState(new Date().toDateString())

  return (
    <View style={styles.container}>
    <View style={styles.display}>
    <View style = {styles.leftDisplay}></View>
    <View style = {styles.rightDisplay}></View>
    </View>

      <View style={styles.subcontainer}>
        <View style={styles.settingContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon name="plus" type="material-community" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="power" type="material-community" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="minus" type="material-community" />
          </TouchableOpacity>
        </View>
        <View style={styles.settingTitle}>
          <Text>Power</Text>
        </View>
      </View>
      <View style={styles.subcontainer}>
        <View style={styles.settingContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon name="fan-chevron-up" type="material-community" />
          </TouchableOpacity>
          <Text>{aircon_fanspeed}</Text>
          <TouchableOpacity style={styles.button}>
            <Icon name="fan-chevron-down" type="material-community" />
          </TouchableOpacity>
        </View>
        <View style={styles.settingTitle}>
          <Text>Fan Speed</Text>
        </View>
      </View>
      <View style={styles.subcontainer}>
        <View style={styles.settingContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon name="fan-chevron-up" type="material-community" />
          </TouchableOpacity>
          <Text>{aircon_flap}</Text>
          <TouchableOpacity style={styles.button}>
            <Icon name="fan-chevron-down" type="material-community" />
          </TouchableOpacity>
        </View>
        <View style={styles.settingTitle}>
          <Text>Fan Vane</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={styles.subcontainer}>
          <View style={styles.settingContainer}>
            <TouchableOpacity style={styles.button}>
              <Icon name="tree" type="material-community" />
            </TouchableOpacity>
          </View>
          <View style={styles.settingTitle}>
            <Text>Powerful Mode</Text>
          </View>
        </View>
        <View style={styles.subcontainer}>
          <View style={styles.settingContainer}>
            <TouchableOpacity style={styles.button}>
              <Icon name="snowflake" type="material-community" />
            </TouchableOpacity>
          </View>
          <View style={styles.settingTitle}>
            <Text>Eco Mode</Text>
          </View>
        </View>
      </View>
      <View style={styles.subcontainer}>
        <View style={styles.settingContainer}>
          <SchedulerController />
        </View>
        <View style={styles.settingTitle}>
          <Text>{new Date().toDateString()}</Text>
        </View>
      </View>
      <View style={styles.submitButton}>
        <Button mode="outlined">
          <Text>Submit</Text>
        </Button>
      </View>
    </View>
  );
};

export default SchedulerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  subcontainer: {
    flex: 1,
    borderWidth: 3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  settingContainer: {
    flex: 1,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  settingTitle: {
    flex: 0.4,
    borderWidth: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderWidth: 1,
  },
  submitButton: {
    flex: 0.5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  display: {
    flex:3,
    borderWidth: 1,
    flexDirection: "row",
  },
  leftDisplay: {
    flex:1,
    borderWidth:1
  },
  rightDisplay: {
    flex:1.75,
    borderWidth:1
  }
});

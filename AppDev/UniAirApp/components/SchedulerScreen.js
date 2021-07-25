import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import { Button, Appbar } from "react-native-paper";
import SchedulerController from "./SchedulerController";
import { useSelector } from "react-redux";
import SchedulerAppBar from "./appbar/SchedulerAppBar";

const SchedulerScreen = (props) => {
  const controllerData = useSelector(
    (state) => state.airconReducer.aircons[props.data.id]
    // (state) => state.airconReducer.aircons[0]
  );

  const [aircon_power, set_aircon_power] = useState(
    controllerData.controllerData.aircon_power
  );

  const [aircon_temperature, set_aircon_temperature] = useState(
    controllerData.controllerData.aircon_temp
  );
  const [aircon_fanspeed, set_aircon_fanspeed] = useState(
    controllerData.controllerData.aircon_fanspeed
  );
  const [aircon_flap, set_aircon_flap] = useState(
    controllerData.controllerData.aircon_flap
  );
  const [aircon_eco_mode, set_aircon_eco_mode] = useState(
    controllerData.controllerData.aircon_eco_mode
  );
  const [aircon_powerful_mode, set_aircon_powerful_mode] = useState(
    controllerData.controllerData.aircon_powerful_mode
  );
  const [date, setDate] = useState(new Date());

  console.log(date)

  console.log(new Date().toString())

  const airconTemp = () => {
    if(aircon_power){
      return <Icon name="power" type="material-community" />
    }
    return <View style = {{flexDirection :"row"}}><Text>{aircon_temperature}</Text><Icon name="temperature-celsius" type="material-community" /></View>
  }

  const airconPowerMode = () => {
    if (aircon_powerful_mode) {
      return <Icon name="snowflake" type="material-community" color = 'blue'/>
    }
    return <Icon name="snowflake" type="material-community"/>
  }

  
  const airconEcoMode = () => {
    if (aircon_eco_mode) {
      return <Icon name="tree" type="material-community" color = 'green'/>
    }
    return <Icon name="tree" type="material-community"/>
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "flex-start", flexDirection: "row" , alignItems: "center"}}>
        <TouchableOpacity
          onPress={() => {
            props.schedulerModal();
          }}
        >
          <Icon type = "ionicons" name = "arrow-back"/>
        </TouchableOpacity>
        <View style = {{justifyContent: "center", alignItems: "center", flex: 1}}>
          <Text>Event Scheulder</Text>
        </View>
      </View>
      <View style={styles.display}>
        <View style={styles.leftDisplay}>
          <View style={styles.displayTopLeft}>
            <View style={styles.general}>
              <Text>{aircon_fanspeed}</Text>
              <Icon name="fan" type="material-community" />
            </View>
            <View style={styles.general}>
              <Text>{aircon_flap}</Text>
              <Icon name="fan" type="material-community" />
            </View>
          </View>
          <View style={styles.general}>
            {airconEcoMode()}
            {airconPowerMode()}
          </View>
        </View>
        <View style={styles.rightDisplay}>
          <View style={styles.displayTopRight}>
            <View style={styles.general}>
              {airconTemp()}
            </View>
          </View>
          <View style={styles.displayBottomRight}>
            <Text>{date.toString()}</Text>
          </View>
        </View>
      </View>

      <View style={styles.subcontainer}>
        <View style={styles.settingContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => set_aircon_temperature(aircon_temperature - 1)}
          >
            <Icon name="minus" type="material-community" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => set_aircon_power(!aircon_power)}
          >
            <Icon name="power" type="material-community" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => set_aircon_temperature(aircon_temperature + 1)}
          >
            <Icon name="plus" type="material-community" />
          </TouchableOpacity>
        </View>
        <View style={styles.settingTitle}>
          <Text>Power</Text>
        </View>
      </View>
      <View style={styles.subcontainer}>
        <View
          style={styles.settingContainer}
          onPress={() => set_aircon_fanspeed(aircon_fanspeed + 1)}
        >
          <TouchableOpacity style={styles.button}>
            <Icon name="fan-chevron-up" type="material-community" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon
              name="fan-chevron-down"
              type="material-community"
              onPress={() => set_aircon_fanspeed(aircon_fanspeed + 1)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.settingTitle}>
          <Text>Fan Speed</Text>
        </View>
      </View>
      <View style={styles.subcontainer}>
        <View style={styles.settingContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon
              name="fan-chevron-up"
              type="material-community"
              onPress={() => set_aircon_flap(aircon_flap + 1)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon
              name="fan-chevron-down"
              type="material-community"
              onPress={() => set_aircon_flap(aircon_flap + 1)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.settingTitle}>
          <Text>Fan Vane</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={styles.subcontainer}>
          <View style={styles.settingContainer}>
            <TouchableOpacity style={styles.button} onPress = {() => set_aircon_powerful_mode(!aircon_powerful_mode)}>
              <Icon name="snowflake" type="material-community" />
            </TouchableOpacity>
          </View>
          <View style={styles.settingTitle}>
            <Text>Powerful Mode</Text>
          </View>
        </View>
        <View style={styles.subcontainer}>
          <View style={styles.settingContainer}>
            <TouchableOpacity style={styles.button} onPress = {() => set_aircon_eco_mode(!aircon_eco_mode)}>
            <Icon name="tree" type="material-community" />
            </TouchableOpacity>
          </View>
          <View style={styles.settingTitle}>
            <Text>Eco Mode</Text>
          </View>
        </View>
      </View>
      <View style={styles.subcontainer}>
        <View style={styles.settingContainer}>
          <SchedulerController date = {date} setDate = {setDate}/>
        </View>
        <View style={styles.settingTitle}>
          <Text>{new Date().toDateString()}</Text>
        </View>
      </View>
      <View style={styles.submitView}>
        <TouchableOpacity style={styles.submitTouchable} onPress = {() => console.log(date.toString())}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SchedulerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 30,
    justifyContent: "space-evenly",
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
    width: "33%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  submitView: {
    flex: 1,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  display: {
    flex: 2,
    borderWidth: 1,
    flexDirection: "row",
  },
  leftDisplay: {
    flex: 1,
    borderWidth: 1,
  },
  rightDisplay: {
    flex: 1.75,
    borderWidth: 1,
  },
  submitTouchable: {
    width: "70%",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  displayTopLeft: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
  },
  displayBottomLeft: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
  },
  displayTopRight: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
  },
  displayBottomRight: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
  },
  general: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

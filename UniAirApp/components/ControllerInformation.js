import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, ButtonGroup, Icon, Tab } from "react-native-elements";
import { useSelector } from "react-redux";

const ControllerInformation = (props) => {
  //const controllerData = useSelector(state => state.airconReducer.aircons[props.id])

  const aircon_fanspeed = useSelector(state => state.airconReducer.aircons[props.id].controllerData.aircon_fanspeed)
  const aircon_flap = useSelector(state => state.airconReducer.aircons[props.id].controllerData.aircon_flap)
  const aircon_eco_mode = useSelector(state => state.airconReducer.aircons[props.id].controllerData.aircon_eco_mode)
  const aircon_powerful_mode = useSelector(state => state.airconReducer.aircons[props.id].controllerData.aircon_powerful_mode)
  // const [aircon_fanspeed, setstate_aircon_fanspeed] = useState(controllerData.controllerData.aircon_fanspeed)
  // const [aircon_flap, setstate_aircon_flap] = useState(controllerData.controllerData.aircon_flap)
  // const [aircon_eco_mode, setstate_aircon_eco_mode] = useState(controllerData.controllerData.aircon_eco_mode)
  // const [aircon_powerful_mode, setstate_aircon_powerful_mode] = useState(controllerData.controllerData.aircon_powerful_mode)

  function fanSpeed() {
    return aircon_fanspeed;
  }

  function airconFlap() {
    return aircon_flap;
  }

  function airconIconEcoMode() {
    if (aircon_eco_mode){
      return "#8ac926"
    }
    return "#0d1b2a"
  }

  function airconIconPowerfulMode() {
    if (aircon_powerful_mode){
      return "#00b4d8"
    }
    return "#0d1b2a"
  }
  
  return (
    <View style = {styles.container}>
      <View style = {styles.subContainer}><Text><Icon name="tailwind" type = 'material-community' />{fanSpeed()}</Text></View>
      <View style = {styles.subContainer}><Text><Icon name="fan" type = 'material-community' />{airconFlap()}</Text></View>
      <View style = {styles.subContainer}><Icon name="tree" type = 'entypo' color = {airconIconEcoMode()} /></View>
      <View style = {styles.subContainer}><Icon name="snowflake" type = 'material-community' color = {airconIconPowerfulMode()}/></View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: "100%",
  },
  subContainer: {
    alignItems: 'center',
    borderWidth: 1,
    width: "20%",
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row', justifyContent:"center"
  }
});

export default ControllerInformation;
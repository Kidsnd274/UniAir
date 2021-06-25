import React from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Icon, Header } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";




const ControllerSelectorMain = (props) => {
  // const Stack = createStackNavigator();


  const AirconInformation = (data) => {
    function airconPower() {
      if (!data.controllerData.aircon_power) {
        return <Icon name = "power" type = 'material-community'/>
      }
      return <View style = {{flexDirection: "row"}}><Text>{data.controllerData.aircon_temp}</Text><Icon name="temperature-celsius" type="material-community" size = {5}/></View>
    }

    function airconIconEcoMode() {
      if (data.controllerData.aircon_eco_mode){
        return "#8ac926"
      }
      return "#0d1b2a"
    }
  
    function airconIconPowerfulMode() {
      if (data.controllerData.aircon_powerful_mode){
        return "#00b4d8"
      }
      return "#0d1b2a"
    }
    return (<View style = {styles.selectorInformation}>
    <View style = {styles.subContainer}>{airconPower()}</View>
      <View style = {styles.subContainer}><Text><Icon name="tailwind" type = 'material-community' />{data.controllerData.aircon_fanspeed}</Text></View>
      <View style = {styles.subContainer}><Text><Icon name="fan" type = 'material-community' />{data.controllerData.aircon_flap}</Text></View>
      <View style = {styles.subContainer}><Icon name="tree" type = 'entypo' color = {airconIconEcoMode()} /></View>
      <View style = {styles.subContainer}><Icon name="snowflake" type = 'material-community' color = {airconIconPowerfulMode()}/></View>
    </View>)
  }

  const controllerData = useSelector(
    (state) => state.airconReducer
  );

  const Selector = (info) => {
    return (<TouchableOpacity style={styles.selector} onPress = {() => {props.navigation.navigate(info.roomName)}}>
      <View style = {styles.selectorTitle}><Text style = {styles.selectorTitleText}>{info.roomName}</Text></View>
      <View style={styles.selectorDisplay}>
        {AirconInformation(info)}
      </View>
    </TouchableOpacity>)
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.childScrollView}
      >
        {controllerData.aircons.map((x) => Selector(x))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  scrollview: {
    flex: 1,
    width: "100%",
    margin: 10,
    alignContent: "space-between",
  },
  childScrollView: { alignItems: "center" },
  selector: {
    flexDirection: "column",
    flex: 1,
    borderWidth: 1,
    width: "90%",
    alignContent: "center",
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 10
  },
  selectorTitle : {
    flex: 2,
    justifyContent: "flex-start",
    width: "100%",
  },
  selectorTitleText: {
    fontSize: 20
  },

  selectorDisplay: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  selectorInformation: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  subContainer: {
    alignItems: 'center',
    width: "10%",
    flex: 1,
    flexDirection: 'row', justifyContent:"center"
  }
  
});

export default ControllerSelectorMain;

import React, {useState} from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, ButtonGroup, Icon } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import {updateTab} from "../redux/actions"

const Tabs = props => {

  const dispatch = useDispatch();
  const controllerData = useSelector(state => state.airconReducer.aircons[props.id])
  const [aircon_tab, set_aircon_tab] = useState(controllerData.aircon_tab)

  const changeTab = (x) => {
    console.log("Change Tab: Component/Tab")
    updateTab(props.id, x)(dispatch);
  }

  const Misc = () => {
    return (
      <TouchableOpacity style={styles.touchableStyle} onPress = {() => changeTab("1")}>
        <Text>
          <Icon name="fan" type="material-community" size={30} />
        </Text>
      </TouchableOpacity>
    );
  };

  const Scheduler = () => {
    return (
      <TouchableOpacity style={styles.touchableStyle} onPress = {() => changeTab("2")}>
        <Text>
          <Icon
            name="clock-time-eight-outline"
            type="material-community"
            size={30}
          />
        </Text>
      </TouchableOpacity>
    );
  };

  const Other = () => {
    return (
      <TouchableOpacity style={styles.touchableStyle} onPress = {() => changeTab("3")}>
        <Text>
          <Icon
            name="weather-partly-lightning"
            type="material-community"
            size={30}
          />
        </Text>
      </TouchableOpacity>
    );
  };

  const buttons = [
    { element: Misc },
    { element: Scheduler },
    { element: Other },
  ];
  return <View style = {styles.container}><ButtonGroup buttons={buttons} containerStyle={{ height: 50, width: "90%" }} flex = {1}/></View>

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  touchableStyle: {
    flex:1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "green",
    width: "25%",
    margin: 10,
    borderRadius: 10,
  },
});

export default Tabs;

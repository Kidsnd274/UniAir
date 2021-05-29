import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, ButtonGroup, Icon } from "react-native-elements";

const FanDualButtons = () => {
  const fan = () => {
    return (
      <Text style = {styles.TextStyle}>
        <Icon name="fan-chevron-up" type = 'material-community' />
        "A"
      </Text>
    );
  };

  const fan1 = () => {
    return <Text style = {styles.TextStyle}><Icon name="fan-chevron-down" type = 'material-community' />"B"</Text>;
  };

  const buttons = [{ element: fan }, { element: fan1 }];
  return (<ButtonGroup buttons={buttons} containerStyle={{ height: "30%", }} />);
};

export default FanDualButtons;

const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 20,
    justifyContent: 'center'
  }

})

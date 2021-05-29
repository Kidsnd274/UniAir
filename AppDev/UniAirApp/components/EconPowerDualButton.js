import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, ButtonGroup, Icon } from "react-native-elements";

const EconPowerDualButtons = () => {
  const econButton = () => {
    return (
      <Text style = {styles.TextStyle}>
        <Icon name="tree" type = 'entypo' />
        "A"
      </Text>
    );
  };

  const powerButton = () => {
    return <Text style = {styles.TextStyle}><Icon name="snowflake" type = 'material-community' />"B"</Text>;
  };

  const buttons = [{ element: powerButton }, { element: econButton }];
  return (<ButtonGroup buttons={buttons} containerStyle={{ height: 80 }} />);
};


const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 20,
    justifyContent: 'center'
  }

})

export default EconPowerDualButtons;
import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Picker } from "react-native";
import { Button, ButtonGroup, Icon } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";

const SchedulerController = (props) => {
  const [date, setDate] = useState(props.date);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "default");
    props.setDate(currentDate);
  };

  const displayMode = (currentMode) => {
    setMode(currentMode);
    setShow(true);
  };

  const datePicker = () => {
   displayMode("date");
  };

  const timePicker = () => {
   displayMode("time");
  };

  return (
    <View style={styles.container}>
      <Text>{String(props.date)}</Text>
      <View>
        <TouchableOpacity onPress={datePicker}>
          <Icon name="date-range" type="material-icons" size={30} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={timePicker}>
          <Icon name="timer" type="material-icons" size={30} />
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={props.date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%",
  },
});

export default SchedulerController;

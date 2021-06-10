import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Picker } from "react-native";
import { Button, ButtonGroup, Icon } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";

const SchedulerController = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "default");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.container}>
      <Picker style={{ height: 50, width: 150 }}>
        <Picker.Item label="On" value="java" />
        <Picker.Item label="Off" value="js" />
      </Picker>
      <View>
        <TouchableOpacity onPress={showDatepicker}>
          <Icon name="date-range" type="material-icons" size={30} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={showTimepicker}>
          <Icon name="timer" type="material-icons" size={30} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Icon name="plus" type="material-community" size={30} />
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
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

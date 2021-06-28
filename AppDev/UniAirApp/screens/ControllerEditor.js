import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, ButtonGroup, Header } from "react-native-elements";
import { useSelector } from "react-redux";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native";

const ControllerEditor = (props) => {
  
  const controllerData = useSelector(
    (state) => state.airconReducer.aircons[props.data.id]
  );


  const [roomName, setRoomName] = useState(controllerData.roomName)
  const [ipAddress, setIpAdress] = useState(controllerData.ipAddress)
  const [port, setPort] = useState(controllerData.port)
 

  return (
    <View style={styles.container}>
      <View style = {styles.subContainer}>
      <TextInput label = "Room Name" value = {roomName} onChange = {x => setRoomName(x)} style = {styles.textInputStyles}/>
      </View>
      <View  style = {styles.subContainer}>
        <TextInput label = "Ip Address" value = {ipAddress} onChange = {x => setIpAdress(x)} style = {styles.textInputStyles}/>
      </View>
      <View  style = {styles.subContainer}>
        <TextInput label = "Port" value = {port} onChange = {x => setPort(x)} style = {styles.textInputStyles}/>
      </View>
      <View style= {styles.subContainer}>
      <TouchableOpacity style = {styles.submitTouchable}><Text style = {styles.submitText}>SUBMIT CHANGES</Text></TouchableOpacity>
      <TouchableOpacity style = {{...styles.submitTouchable, backgroundColor :"red"}}><Text style = {styles.submitText}>DELETE CONTROLLER</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  subContainer: {flex: 1, flexDirection: "column", alignItems: "center", width : "100%", justifyContent: "center"},
  textInputStyles : {width: "80%"},
  submitTouchable : {alignItems: "center", borderRadius : 10, backgroundColor: "#00B4D8", width: "60%", height: 50, justifyContent: "center", marginVertical: 10},
  submitText: {color : "#FFFF"},

});

export default ControllerEditor

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Switch } from 'react-native';

export default function App() {
  const[ipAddress, setIpAddress] = React.useState(0)
  const[port, setPort] = React.useState(80)
  
  const[aircon_temp, new_aircon_temp] = React.useState(1)

  const[aircon_power, new_aircon_power] = React.useState(false)
  const[aircon_fanspeed, new_aircon_fanspeed] = React.useState(1)
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Text>UniAir API Test App</Text>
      <Text></Text>
      <TextInput placeholder="IP Address" onChangeText={text => setIpAddress(text)} />
      <TextInput placeholder="Port (Default: 80)" onChangeText={text => setPort(text)} />
      <Button onPress={testAPIFunction} title="Test API" />
      <TextInput placeholder="Temp" text={aircon_temp} onChangeText={new_aircon_temp} />
      <TextInput placeholder="Fanspeed" onChangeText={text => new_aircon_fanspeed} />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Button onPress={get_aircon_data} title="Get Aircon Data" />
      <Button onPress={send_aircon_data} title="Send Aircon Data"></Button>
      <StatusBar style="auto" />
    </View>
  );

  function testAPIFunction() {
    var ipWithPort = ipAddress + ":" + port
    console.log(ipWithPort)
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    }
    fetch("http://" + ipWithPort + "/test-ir", // IP Address
        requestOptions)
      .then(response => response.text())
      .then(result => console.log(result)) // Results from request stored here
      .catch(error => console.log('error', error)); // Error stored here
  }

  function get_aircon_data() {
    var ipWithPort = ipAddress + ":" + port
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://" + ipWithPort + "/api/aircon_data", requestOptions) // IP Address
      .then(response => response.text())
      .then(result => console.log(result)) // Results from request stored here (should be a json)
      .catch(error => console.log('error', error)); // Error stored here
  }

  function send_aircon_data() {
    var ipWithPort = ipAddress + ":" + port
    var raw = JSON.stringify({
      "date_and_time": "2021-05-29T05:24:16.861584",
      "aircon_power": true,
      "aircon_temp": 26,
      "aircon_fanspeed": 20,
      "aircon_flap": 3,
      "aircon_eco_mode": true,
      "aircon_powerful_mode": true
    });
    
    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://" + ipWithPort + "/api/aircon_data", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
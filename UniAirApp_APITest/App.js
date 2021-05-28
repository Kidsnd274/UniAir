import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const[ipAddress, setIpAddress] = React.useState(0)
  const[port, setPort] = React.useState(80)
  return (
    <View style={styles.container}>
      <Text>UniAir API Test App</Text>
      <Text></Text>
      <TextInput placeholder="IP Address" onChangeText={text => setIpAddress(text)} />
      <TextInput placeholder="Port (Default: 80)" onChangeText={text => setPort(text)} />
      <Button onPress={testAPIFunction} title="Test API" />
      <Text />
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
    fetch("http://" + ipAddress + ":" + port + "/test-ir", // IP Address
        requestOptions)
      .then(response => response.text())
      .then(result => console.log(result)) // Results from request stored here
      .catch(error => console.log('error', error)); // Error stored here
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
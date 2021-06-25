import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

const Settings = (props) => {
  return(
    <View style = {styles.container}>
      <ScrollView style = {styles.scrollView}>
        <TouchableOpacity style = {styles.scrollViewOptions} onPress = {() => props.navigation.navigate("Google Sign in")}>
          <Text style = {{fontSize: 20}}>Connect to Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.scrollViewOptions} onPress = {() => props.navigation.navigate("Edit Controller Details")}>
          <Text style = {{fontSize: 20}}>Edit Controller Details</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Settings

const styles = StyleSheet.create({
  container : {flex : 1},
  scrollView: {flex: 1, flexDirection: "column", paddingTop: 20},
  scrollViewOptions: {borderWidth: 1, width: "100%", height: 55, alignItems: "center"}
})
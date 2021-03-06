import React, {useEffect} from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import firebase from "../database/firebaseConfig";
import { useNavigation } from "@react-navigation/core";


const NavigationDrawerContent = (props) => {
  useEffect(() => {
      signOut()
    }
  )

  var user = firebase.auth().currentUser;

  function userAvatar() {
    if (user) {
      return firebase.auth().currentUser.photoURL;
    } else {
      return "https://i.imgur.com/VCHkniz.png";
    }
  }

  function userTitle() {
    if (user) {
      return firebase.auth().currentUser.displayName;
    } else {
      return "Guest";
    }
  }

  function signOut() {
    if (user) {
      return ( 
      <View style={styles.accountDrawer}>
        <Drawer.Section title="Account Setting">
          <DrawerItem
            icon={() => <Icon name="deleteuser" type="ant-design" />}
            label="SignOut"
            onPress={() => {
              firebase.auth().signOut().then()
            }}
          />
        </Drawer.Section>
      </View>
      )
    }
  }

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.accountDrawer}>
          <View style={styles.accountDrawerDetails}>
            <Avatar.Image
              source={{ uri: userAvatar() }}
              size={50}
              style={{ marginTop: 10 }}
            />
            <View style={{ marginTop: 5, marginLeft: 15 }}>
              <Title>{userTitle()}</Title>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Drawer.Section title="Quick Access">
            <DrawerItem
              icon={() => (
                <Icon name="file-tray-stacked-sharp" type="ionicon" />
              )}
              label="Welcome"
              onPress={() => {
                props.navigation.navigate("Welcome");
              }}
            />
            <DrawerItem
              icon={() => (
                <Icon
                  name="controller-classic-outline"
                  type="material-community"
                />
              )}
              label="Controller List"
              onPress={() => {
                props.navigation.navigate("ControllerList");
              }}
            />
          </Drawer.Section>
        </View>
        <View style={styles.accountDrawer}>
          <Drawer.Section title="Settings">
            <DrawerItem
              icon={() => <Icon name="account-cog" type="material-community" />}
              label="Settings"
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            />
          </Drawer.Section>
        </View>
        {signOut()}
      </DrawerContentScrollView>
    </View>
  );
};

export default NavigationDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    lineHeight: 14,
  },

  accountDrawer: {
    marginTop: 20,
    marginBottom: 20,
  },

  accountDrawerDetails: {
    flexDirection: "row",
    paddingLeft: 15,
    alignContent: "flex-end",
  },

  navigationButtons: {
    flex: 5,
    borderWidth: 2,
  },
});

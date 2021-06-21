import React from "react";
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

const NavigationDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.accountDrawer}>
          <View style={styles.accountDrawerDetails}>
            <View style={{ marginTop: 5, marginLeft: 15 }}>
              <Title></Title>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Drawer.Section title="Quick Access">
            <DrawerItem
              icon={() => (
                <Icon
                  name="gamepad-variant-outline"
                  type="material-community"
                />
              )}
              label="Gaming-Channel"
              onPress={() => {
                props.navigation.navigate("GamingScreen");
              }}
            />
            <DrawerItem
              icon={() => <Icon name="tailwind" type="material-community" />}
              label="Chill-Zone"
              onPress={() => {
                props.navigation.navigate("GamingScreen");
              }}
            />
            <DrawerItem
              icon={() => <Icon name="music" type="material-community" />}
              label="Lofi-Lounge"
              onPress={() => {
                props.navigation.navigate("GamingScreen");
              }}
            />
            <DrawerItem
              icon={() => <Icon name="bookshelf" type="material-community" />}
              label="Study-Group"
              onPress={() => {
                props.navigation.navigate("SettingsScreen");
              }}
            />
            <DrawerItem
              icon={() => <Icon name="filmstrip" type="material-community" />}
              label="Movie-Appreciation"
              onPress={() => {
                props.navigation.navigate("SettingsScreen");
              }}
            />
            <DrawerItem
              icon={() => (
                <Icon name="image-filter-hdr" type="material-community" />
              )}
              label="Rock-Climbing"
              onPress={() => {
                props.navigation.navigate("SettingsScreen");
              }}
            />
            <DrawerItem
              icon={() => <Icon name="plus" type="material-community" />}
              label="Add More"
              onPress={() => {
                props.navigation.navigate("SettingsScreen");
              }}
            />
          </Drawer.Section>
        </View>
        <View style={styles.accountDrawer}>
          <Drawer.Section title="Settings">
            <DrawerItem
              icon={() => <Icon name="account-cog" type="material-community" />}
              label="Account-Details"
              onPress={() => {
                props.navigation.navigate("SettingsScreen");
              }}
            />
            <DrawerItem
              icon={() => <Icon name="exit-to-app" type="material-community" />}
              label="Sign-Out"
              onPress={() => {
                props.navigation.navigate("SettingsScreen");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default NavigationDrawer;

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

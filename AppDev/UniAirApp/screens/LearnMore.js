import React from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Icon, Header } from "react-native-elements";
import { useSelector } from "react-redux";
import { Text, Title, Subheading, Paragraph, Headline } from "react-native-paper";

const LearnMore = () => {
  return (
    <View style = {styles.container}>

        <Title>UniAir</Title>
        <ScrollView>
        <Subheading> Motivation</Subheading>
        <Paragraph>
        With the increasing number of smart home devices such as
        refrigerators, televisions etc. These smart devices have brought
        increased convenience and many quality of life improvements. However,
        more often than not these devices often come at a price premium compared
        to their “dumb” counterparts. This has led us to wonder how we can
        achieve these improvements at a fraction of its cost. We decided to
        focus on the air-conditioner as it is a common household appliance that
        is used in most households in Singapore’s hot and humid climate. A
        typical air conditioner uses about 1.29kW of power which translates to
        around $0.25 to $0.35 per hour, depending on the size of the room and
        cost of electricity. On the other hand, smart air conditioners have some
        key features which can help reduce energy consumption. 
        </Paragraph>
        <Paragraph>
        By giving users the ability to control the air-conditioner from anywhere with a simple
        tap on the phone, this allows them to turn the air-conditioner off in
        the event where they have already left the house and are unable to do so
        physically. This has led us to come up with our research idea, on how we
        can turn our mundane air-conditioner to a smart air-conditioner that can
        lead to quality of life improvements and cut down on our electricity
        consumption.
        </Paragraph>
        <Subheading>About Us</Subheading>
        <Paragraph>
        As computer science students, we were eager to implement
        our skills and knowledge that we have learnt into our daily lives. This
        is a great opportunity for us to gain some real world experience and
        learn more about hardware implementations. Aim To convert a traditional
        air-conditioner to a smart one at a low cost with benefits such as
        increased convenience and energy savings.
        </Paragraph>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({container : {flex: 1}})

export default LearnMore
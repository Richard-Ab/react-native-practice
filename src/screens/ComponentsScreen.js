import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const Name = "My name is Richard Bryan"

  return <View>
    <Text style={styles.textStyle}>Getting started with React Native</Text> 
    <Text style={styles.textStyleTwo}>{Name}</Text>
  </View> 
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
    },
  textStyleTwo: {
    fontSize: 20
  }

});

export default ComponentsScreen;
  
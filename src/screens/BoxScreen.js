import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    // <View style={styles.viewStyle}>
    //   {/* <Text style={styles.textOneStyle}>child #1</Text>
    //   <Text style={styles.textTwoStyle}>child #2</Text>
    //   <Text style={styles.textThreeStyle}>child #3</Text> */}
    // </View>
    <View style={styles.viewStyle}>
      <View style={styles.viewStyleBox}/>
      <View style={styles.viewStyleBox1}/>
      <View style={styles.viewStyleBox2}/>
    </View>
  );
};

const styles = StyleSheet.create({
    viewStyle: {
        height:200,
        borderWidth:3,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    viewStyleBox: {
        height:50,
        width:50,
        backgroundColor:'red',
        borderWidth:3,
        
    },
    viewStyleBox1: {
        height:50,
        width:50,
        backgroundColor:'green',
        borderWidth:3,
        marginTop: 50

        
    },
    viewStyleBox2: {
        height:50,
        width:50,
        backgroundColor:'blue',
        borderWidth:3,
        
    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'red',
        
    },
    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1
    },
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'red',
        
        
    }

});

export default BoxScreen;

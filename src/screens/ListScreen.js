// import React from "react";
// import {View, Text, StyleSheet} from "react-native";

// const ListScreen = () => {
//     return <Text>List Screen</Text>
// };

// const styles = StyleSheet.create({});

// export default ListScreen;

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: "20" },
    { name: "Friend #2", age: "23" },
    { name: "Friend #3", age: "31" },
    { name: "Friend #4", age: "34" },
    { name: "Friend #5", age: "25" },
    { name: "Friend #6", age: "46" },
    { name: "Friend #7", age: "17" },
    { name: "Friend #8", age: "48" },
    { name: "Friend #9", age: "29" },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;

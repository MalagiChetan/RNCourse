import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GoalItem = ({ itemData, goals, setGoals }) => {
  const handleDelete = (ind) => {
    const filteredGoal = goals.filter((goal, idx) => {
      return idx !== ind;
    });
    setGoals(filteredGoal);
  };
  return (
    <View style={styles.list}>
      <Text
        style={styles.listText}
        onPress={() => {
          handleDelete(itemData.index);
        }}
      >
        {itemData.item.text}
      </Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listText: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  list: {
    margin: 8,
    borderRadius: 6, // this is missed in ios, as we added these styles directly on text component
    backgroundColor: "#5e0acc",
    paddingVertical: 4,
  },
});

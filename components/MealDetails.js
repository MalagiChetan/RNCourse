import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.description, textStyle]}>{duration} mins</Text>
      <Text style={[styles.description, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.description, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    margin: 8,
    marginHorizontal: 10,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
});

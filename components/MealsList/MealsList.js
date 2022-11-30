import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const MealsList = ({ items }) => {
  const renderMealItem = (itemData) => {
    const { id, title, imageUrl, duration, complexity, affordability } =
      itemData.item;
    return (
      <MealItem
        id={id}
        title={title}
        imageUrl={imageUrl}
        affordability={affordability}
        complexity={complexity}
        duration={duration}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

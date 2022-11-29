import { StyleSheet, FlatList, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(catId);
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  // const pressHandler = () => {
  //   navigation.navigate("MealsDetails", {});
  // };

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
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

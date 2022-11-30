import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
// import { FavouritesContext } from "../store/context/favorites-context";
import MealsList from "./MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const Drawerz = () => {
  // const FavListContext = useContext(FavouritesContext);
  // const favMeals = MEALS.filter((meal) => FavListContext.ids.includes(meal.id));
  const favMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favMeals = MEALS.filter((meal) => favMealIds.includes(meal.id));
  if (favMeals.length === 0) {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favMeals} />;
};

export default Drawerz;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

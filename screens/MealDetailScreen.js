import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonPressHandler = () => {};

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerRight: () => {
      //   return <Button title="Tap Me!" onPress={headerButtonPressHandler} />;
      // },
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="grey"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.mealDetailsContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.subtitleContainer}>
        <Text style={styles.subTitle}>Ingredients</Text>
      </View>
      {selectedMeal.ingredients.map((ingredient) => (
        <View key={ingredient} style={styles.stepsView}>
          <Text style={styles.steps}>{ingredient}</Text>
        </View>
      ))}
      <View style={styles.subtitleContainer}>
        <Text style={styles.subTitle}>Steps</Text>
      </View>
      {selectedMeal.steps.map((step) => (
        <View key={step} style={styles.stepsView}>
          <Text style={styles.steps}>{step}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  mealDetailsContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  subTitle: {
    color: "#efb4ff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitleContainer: {
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "#efb4ff",
    borderBottomWidth: 2,
  },
  stepsView: {
    borderRadius: 6,
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 8,
    backgroundColor: "#efb4ff",
  },
  steps: {
    color: "#000",
    textAlign: "center",
  },
});

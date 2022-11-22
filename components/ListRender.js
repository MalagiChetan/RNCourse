import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import GoalItem from "./GoalItem";

const ListRender = ({ goals, handleDelete, setGoals }) => {
  return (
    <View style={styles.goalsContainer}>
      {/* ScrollView is not suitable for dynamic data rendering, as it renders all the map items in the background. Imagine if we had 20000 map items, that would cause serious performance issue. To solve this problem we have FlatList component*/}
      {/* <ScrollView>
          {goals.map((goal, idx) => {
            return (
              <View key={idx} style={styles.list}>
                <Text
                  style={styles.listText}
                  onPress={() => {
                    handleDelete(idx);
                  }}
                >
                  {goal}
                </Text>
              </View>
            );
          })}
        </ScrollView> */}

      <FlatList
        alwaysBounceVertical={false}
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return (
            <GoalItem
              itemData={itemData}
              handleDelete={handleDelete}
              goals={goals}
              setGoals={setGoals}
            />
          );
        }}
      ></FlatList>
    </View>
  );
};

export default ListRender;

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
});

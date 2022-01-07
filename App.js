import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import GoalItem from './components/GoalInput';
import GoalInput from "./components/GoalItem";

export default function App() {

  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState([]);



  const addGoalHandler = goalTitle => {
    // console.log(enteredGoal);
    setCourseGoal(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }
  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="ADD NEW GOAL" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },


});

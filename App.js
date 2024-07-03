import { useState } from 'react';
import { Button, FlatList, StyleSheet, View, } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text:enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id );
    });
  }

  return (
    <View style={styles.appcontainer}>
      <Button title='Add New Goal' 
      color="#5e0acc" 
      onPress={startAddGoalHandler}/>
       <GoalInput visible={modalVisible} 
       onAddGoal={addGoalHandler} 
       onCancel={endAddGoalHandler}
       />
      <View style={styles.goalsContainer}>
      <FlatList 
      data={courseGoals}
       renderItem={(itemData) => {
        itemData.index
        return <GoalItem 
        text={itemData.item.text}
        id={itemData.item.id} 
        onDeleteItem={deleteGoalHandler}/>;
      }}
      keyExtractor={(item, index) => {
        return item.id;
      }} 
      alwaysBounceVertical={false}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a',
  },
  
  goalsContainer: {
    flex: 4,
  },

});

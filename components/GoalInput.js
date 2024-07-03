import { StyleSheet, TextInput, View, Button, Modal, Image } from 'react-native'
import {useState} from 'react';

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
     };

     function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
     }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/goal.png')} style={styles.image}/>
        <TextInput style={styles.TextInput}
        placeholder="Your Course goals!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
         />
       <View style={styles.buttonContainer}>
        <View style={styles.button}>  
      <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc"/>
        </View>
        <View style={styles.button}>
      <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
        </View>
         </View>
      </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    
      },
      TextInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        width: '100%',
        padding: 9,
        backgroundColor: 'white',
        borderRadius: 10,

        
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
        
      },
      button: {
        width: 100,
        marginHorizontal: 8,
      },
      image: {
        width: 100,
        height: 100,
        margin: 20,
      }
});
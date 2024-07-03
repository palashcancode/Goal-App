import { StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'

export default function GoalItem(props) {
    

  return (
      <View style={styles.goalItem}>
       <Pressable android_ripple={{color: '#5e0acc'}}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem} >
      <Text style={styles.goalText}>{props.text}</Text>
       </Pressable>
        </View>
  );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        
        color: 'white',
      },
      pressed: {
        opacity: 0.5
      },
      goalText: {
        color: 'white',
        padding: 8,
      }
})
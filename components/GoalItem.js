import { View , Text , StyleSheet, Pressable } from "react-native";
const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{color:'#210644'}} 
      onPress={() => props.onDeleteItem(props.id)}
      //for ios ripple effect we need to use style prop
      style={({ pressed }) => pressed && styles.pressedItem}
      >
    <Text style={styles.goalColor}>{props.text}</Text>
  </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
    goalItem : {
        margin : 8,
        borderRadius : 6,
        backgroundColor: '#5e0acc',
        color: 'white'
      },
      pressedItem: {
        opacity: 0.5,
      },
      goalColor : {
        padding : 8,
        color: 'white'
      }
})

export default GoalItem; 

//extras
//<Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
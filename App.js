// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,  View , FlatList, Button} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';


 const App = () => {
   const [enterGoalText , setEnterGoalText ] = useState('');
   const [modalIsVisible, setModalIsVisible] = useState(false);
   const [goals , setGoals] = useState([]);
  
   const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }
  const endAddGoalHandler = () => {
      setModalIsVisible(false)
  }
    const textInputGoal = (enteredText) => {
       setEnterGoalText(enteredText);
   }

   const addGoalBtn = () =>{
      // console.log(enterGoalText);
      setGoals((currentGoals) => [
        ...currentGoals,
          //  enterGoalText
          { text: enterGoalText, id: Math.random().toString() },
      ]);
      setEnterGoalText('');
      setModalIsVisible(false)
   } 
  //  const deleteItem = (id) =>{
  //     // console.log('DELETE');
  //     setGoals((currentGoals)=>{
  //         return currentGoals.filter((goal)=> goal.id !== id);
  //     });
  //  }
 
  return (
    <>
    <StatusBar style="light"/>
     <View style={styles.appContainer}>
       <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
       <GoalInput  
       textInputGoalChange={textInputGoal} 
       onaAddGoal={addGoalBtn} 
       enterText={enterGoalText}
       visible={modalIsVisible}
       onCancel={endAddGoalHandler}
       />
       
       <View style={styles.goalsContainer}>
       <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
               <GoalItem 
                text={itemData.item.text} 
                id={itemData.item.id}
                onDeleteItem={(id) =>setGoals((currentGoals)=>{
                          return currentGoals.filter((goal)=> goal.id !== id);
                      })}
                />
            );
          }}
          keyExtractor={(item, index) => {
             return item.id;
          }}
          alwaysBounceVertical={false}
        />
       </View>
     </View>
     </>  
 );
}
export default App;

const styles = StyleSheet.create({
     appContainer : {
      flex : 1,
      paddingTop: 50,
      paddingHorizontal: 16
     },
    
    goalsContainer: {
      flex: 2,
    },
    
});












{/* <View style={styles.container}>
<Text style={{margin : 16 , borderWidth: 1, borderColor: 'red' , padding: 16}}> Hello World !!!!!</Text>
<Text style={{margin : 16 , borderWidth: 1, borderColor: 'blue' , padding: 16}}> Frist Mobile App!</Text>
<Button color='#000'  title='Add Goal' />
<StatusBar style="auto" />
</View> */}
// FlatIconList is best when we have  large amount of data because it generate data when we scroll and by using this app performance increase
// <ScrollView> We used ScrollView when we have limited amount of data
//            <Text> List Of Goals</Text>
//            {goals.map((goal,i)=>{
//                return (
//                 <View key={i} style={styles.goalItem} >
//                 <Text style={styles.goalColor}>{goal}</Text>
//                 </View>
//                 )
//            })} 
//            </ScrollView>

//onDeleteItem={deleteGoalHandler}
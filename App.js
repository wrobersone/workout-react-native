import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json';

export default function App() {
  const exercise = exercises[0];
  return (
    <View style={styles.container}>
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exercise}>Muscle: {exercise.muscle} | Equipment: {exercise.equipment}</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    justifyContent: 'center',
    padding: 10,
  },
  exerciseContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: '500'
  },
  exercise: {
    color: 'gray',
    textTransform: 'capitalize',
  }
});

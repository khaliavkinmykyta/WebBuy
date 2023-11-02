import React, {useState, useEffect} from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getItem, resetItem} from '../services/Score';
import {useNavigation} from '@react-navigation/native';

const Final = () => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const navigation = useNavigation();

  const handleRestart = () => {
    resetItem('correctAnswers');
    navigation.navigate('Start');
  };

  useEffect(() => {
    const loadCorrectAnswers = async () => {
      const value = await getItem('correctAnswers');
      if (value !== null) {
        setCorrectAnswers(parseInt(value, 10));
      }
    };
    loadCorrectAnswers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/gif3.gif')} style={styles.image} />

      <Text style={styles.questionText}>Well done!</Text>

      <Text style={styles.resultText}>
        Правильних відповідей: {correctAnswers}
      </Text>

      <TouchableOpacity onPress={handleRestart} style={[styles.nextButton]}>
        <Text style={styles.nextButtonText}>Пройти знову</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
  },
  questionText: {
    fontSize: 24,
    marginVertical: 20,
  },
  answerButton: {
    backgroundColor: '#007bff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerButtonText: {
    color: 'white',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#007bff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Final;

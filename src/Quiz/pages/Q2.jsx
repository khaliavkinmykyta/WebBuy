import React, {useState, useEffect} from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getItem, setItem} from '../services/Score'; 
import { useIsFocused, useNavigation } from '@react-navigation/native';


const Q2 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [next, setNext] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const navigation = useNavigation();
  const isFocused = useIsFocused();


  useEffect(() => {
    const loadCorrectAnswers = async () => {
      const value = await getItem('correctAnswers');
      if (value !== null) {
        setCorrectAnswers(parseInt(value, 10));
      }
    };
    loadCorrectAnswers();
  }, []);

  useEffect(() => {
    if (!isFocused) {
      setSelectedAnswer(null);
      setNext(false);
      setCorrectAnswers(0);
    }
  }, [isFocused]);


  const checkAnswer = answer => {
    setSelectedAnswer(answer);
    setNext(true);

    if (answer === 1) {
      const newCorrectAnswers = correctAnswers + 1;
      setCorrectAnswers(newCorrectAnswers);
      setItem('correctAnswers', newCorrectAnswers.toString());
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/gif2.gif')} style={styles.image} />

      <Text style={styles.questionText}>Столиця України?</Text>

      <TouchableOpacity
        style={[
          styles.answerButton,
          selectedAnswer === 1 && {
            backgroundColor: selectedAnswer === 1 ? 'green' : 'red',
          },
        ]}
        onPress={() => checkAnswer(1)}
        disabled={next}>
        <Text style={styles.answerButtonText}>Київ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.answerButton,
          selectedAnswer === 2 && {
            backgroundColor: selectedAnswer === 2 ? 'red' : '#007bff',
          },
        ]}
        onPress={() => checkAnswer(2)}
        disabled={next}>
        <Text style={styles.answerButtonText}>Харків</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.answerButton,
          selectedAnswer === 3 && {
            backgroundColor: selectedAnswer === 3 ? 'red' : '#007bff',
          },
        ]}
        onPress={() => checkAnswer(3)}
        disabled={next}>
        <Text style={styles.answerButtonText}>Жмеринка</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.answerButton,
          selectedAnswer === 4 && {
            backgroundColor: selectedAnswer === 4 ? 'red' : '#007bff',
          },
        ]}
        onPress={() => checkAnswer(4)}
        disabled={next}>
        <Text style={styles.answerButtonText}>Львів</Text>
      </TouchableOpacity>

      <Text style={styles.resultText}>
        Правильних відповідей: {correctAnswers}
      </Text>

      <TouchableOpacity
       onPress={() => {
        navigation.navigate('Final')
      }}
        style={[
          styles.nextButton,
          next ? {backgroundColor: 'blue'} : {backgroundColor: 'gray'},
        ]}
        disabled={!next}>
        <Text style={styles.nextButtonText}>Наступне питання</Text>
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

export default Q2;

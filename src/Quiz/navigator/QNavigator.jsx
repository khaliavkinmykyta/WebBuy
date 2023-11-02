import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StartQ from '../pages/StartQ';
import Q2 from '../pages/Q2';
import Final from '../pages/Final';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const QNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Start" component={StartQ} />
        <Stack.Screen name="Q2" component={Q2} />
        <Stack.Screen name="Final" component={Final} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default QNavigator;

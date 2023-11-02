import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
};

export const resetItem = async key => {
  try {
    await AsyncStorage.setItem(key, '0');
  } catch (error) {
    console.error(error);
  }
};

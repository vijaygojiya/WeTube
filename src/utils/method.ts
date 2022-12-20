import AsyncStorage from '@react-native-async-storage/async-storage';

const Method = {
  savePref: (key: string, value: unknown) => {
    AsyncStorage.setItem(key, JSON.stringify(value));
  },
  saveStringPref: (key: string, value: string) => {
    AsyncStorage.setItem(key, value);
  },

  removePref: (key: string) => {
    AsyncStorage.removeItem(key);
  },
};

export default Method;

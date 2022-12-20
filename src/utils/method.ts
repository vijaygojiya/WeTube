import AsyncStorage from '@react-native-async-storage/async-storage';
import moment, { MomentInput } from 'moment';
import { showToast } from './toast';

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

  getFormatedViewCount: (views: number) => {
    return Intl.NumberFormat('en', { notation: 'compact' }).format(views);
  },
  getFormatedDate: (time: MomentInput) => {
    return moment(time).fromNow(false);
  },
  handleInDev: (which: string) => {
    showToast(`${which} is in develop`)
  }
};

export default Method;

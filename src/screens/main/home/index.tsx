import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import TopAppBars from '../../../components/custom/topappbars';

const HomeScreen = () => {
  return (
    <View style={styles.screenBackground}>
      <TopAppBars />
    </View>
  );
};

export default HomeScreen;

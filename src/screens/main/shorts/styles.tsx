import { StyleSheet } from 'react-native';
import StyleConfig from '../../../utils/StyleConfig';

export const styles = StyleSheet.create({
  screenBackground: {
    flex: 1,
  },
  flContainer:{
    height: StyleConfig.height - StyleConfig.tabBarHeight,
    overflow:'hidden',
  }
});

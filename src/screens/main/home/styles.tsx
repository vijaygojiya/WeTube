import {StyleSheet} from 'react-native';

import {Color} from '../../../utils/color';

export const styles = StyleSheet.create({
  screenBackground: {
    flex: 1,
    backgroundColor: Color.balck,
  },
  header: {
    position: 'absolute',
    backgroundColor: Color.balck,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
  },
});

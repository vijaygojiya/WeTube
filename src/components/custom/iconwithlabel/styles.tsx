import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color';
import StyleConfig from '../../../utils/StyleConfig';

export const styles = StyleSheet.create({
  contaienr: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: StyleConfig.smartWidthScale(8),
    marginTop: StyleConfig.smartScale(10),
  },
  icon: {
    height: StyleConfig.countPixelRatio(29),
    width: StyleConfig.countPixelRatio(29),
    margin: StyleConfig.countPixelRatio(9),
  },
  dislikeIconStyle: {
    transform: [{rotateY: '180deg'}, {rotateX: '180deg'}],
  },
  shareIconStyle: {
    transform: [{rotateY: '180deg'}],
  },
  titleStyle: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: StyleConfig.countPixelRatio(14),
    color: Color.white,
  },
});

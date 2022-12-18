import { StyleSheet } from 'react-native';
import { Color } from '../../../utils/color';
import StyleConfig from '../../../utils/StyleConfig';

export const styles = StyleSheet.create({
  thumbnailImageStyle: {
    width: StyleConfig.width,
    aspectRatio: 16 / 9,
    justifyContent: 'flex-end',
    backgroundColor: Color.subTitleColor,
  },
  durationTextStyle: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: StyleConfig.countPixelRatio(12),
    backgroundColor: Color.balck,
    borderRadius: StyleConfig.countPixelRatio(3),
    alignSelf: 'flex-end',
    paddingHorizontal: StyleConfig.smartWidthScale(3.5),
    marginEnd: StyleConfig.smartWidthScale(5),
    marginBottom: StyleConfig.smartScale(5),
  },
  footerContainer: {
    flexDirection: 'row',
    marginVertical: StyleConfig.smartScale(10),
  },
  channelPictureStyle: {
    height: StyleConfig.countPixelRatio(36),
    width: StyleConfig.countPixelRatio(36),
    borderRadius: StyleConfig.countPixelRatio(18),
    marginHorizontal: StyleConfig.smartWidthScale(12),
    backgroundColor: Color.subTitleColor,

  },
  videoTitleTextStyle:{
    fontFamily: StyleConfig.fontMedium,
    color: Color.titleColor,
    fontSize: StyleConfig.countPixelRatio(14),
  },
  videoSubTitleTextStyle:{
    fontFamily: StyleConfig.fontMedium,
    color: Color.subTitleColor,
    fontSize: StyleConfig.countPixelRatio(12),
  }
});

import { StyleSheet } from 'react-native';

import { Color } from '../../../utils/color';
import StyleConfig from '../../../utils/StyleConfig';

export const styles = StyleSheet.create({
  thumbnailImageStyle: {
    width: StyleConfig.width,
    // height: StyleConfig.countPixelRatio(225),
    aspectRatio: 16 / 9,
    justifyContent: 'flex-end',
    backgroundColor: Color.bg2,
  },
  durationTextStyle: {
    color: Color.white,
    fontFamily: StyleConfig.fontRegular,
    fontSize: StyleConfig.countPixelRatio(12),
    backgroundColor: Color.balck,
    borderRadius: StyleConfig.countPixelRatio(3),
    alignSelf: 'flex-end',
    paddingHorizontal: StyleConfig.smartWidthScale(4),
    paddingVertical: StyleConfig.smartScale(1),
    marginEnd: StyleConfig.smartWidthScale(5),
    marginBottom: StyleConfig.smartScale(5),
  },
  footerContainer: {
    flexDirection: 'row',
    marginTop: StyleConfig.smartScale(4),
    marginBottom: StyleConfig.smartScale(16),
    marginStart: StyleConfig.smartWidthScale(12),
  },
  textInfoContainer: {
    marginStart: StyleConfig.smartWidthScale(12),
    flex: 1,
  },
  channelPictureStyle: {
    height: StyleConfig.countPixelRatio(40),
    width: StyleConfig.countPixelRatio(40),
    borderRadius: StyleConfig.countPixelRatio(20),
    backgroundColor: Color.bg2,
    marginTop: StyleConfig.countPixelRatio(12),
  },
  videoTitleTextStyle: {
    fontFamily: StyleConfig.fontMedium,
    color: Color.titleColor,
    fontSize: StyleConfig.countPixelRatio(14),
    lineHeight: StyleConfig.countPixelRatio(17.5),
    marginBottom: StyleConfig.smartScale(3),
    marginTop: StyleConfig.countPixelRatio(12),
  },
  videoSubTitleTextStyle: {
    fontFamily: StyleConfig.fontRegular,
    color: Color.subTitleColor,
    fontSize: StyleConfig.countPixelRatio(12),
  },
});

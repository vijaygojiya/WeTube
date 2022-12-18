import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import AppImages from '../../../assets/images';
import {Color} from '../../../utils/color';
import StyleConfig from '../../../utils/StyleConfig';
import GS from '../../../utils/styles';
import PressableIcon from '../pressableicon';

const TopAppBars = ({
  title,
  isLeftTitle,
  rightTitle,
  isRightButton,
  rightIcon,
  onLeftClickListener,
  onRightClickListener,
  rightIconStyle,
  hideBackIcon,
}) => {
  return (
    <SafeAreaView
      style={styles.saContainer}
      forceInset={{top: 'always', bottom: 'never'}}>
      <Image
        source={AppImages.yt_logo}
        style={styles.ytLogoStyle}
        resizeMode="contain"
      />
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <PressableIcon iconSource={AppImages.ic_cast} />
      <PressableIcon iconSource={AppImages.ic_bell} />
      <PressableIcon iconSource={AppImages.ic_search} />
      <Pressable>
        <Text style={styles.avtarText}>V</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  saContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ytLogoStyle: {
    width: StyleConfig.countPixelRatio(89),
    height: StyleConfig.countPixelRatio(20),
    marginHorizontal: StyleConfig.smartWidthScale(12),
  },
  avtarText: {
    fontSize: StyleConfig.countPixelRatio(16),
    fontFamily: StyleConfig.fontRegular,
    backgroundColor: 'green',
    paddingHorizontal: StyleConfig.countPixelRatio(6),
    marginHorizontal: StyleConfig.smartWidthScale(12),
    borderRadius: 40,
  },
});

export default TopAppBars;

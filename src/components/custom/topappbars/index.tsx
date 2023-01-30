import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import AppImages from '../../../assets/images';
import Method from '../../../utils/method';
import StyleConfig from '../../../utils/StyleConfig';
import PressableIcon from '../pressableicon';

const TopAppBars = () => {
  return (
    <SafeAreaView
      style={styles.saContainer}
      forceInset={{top: 'always', bottom: 'never'}}>
      <Image
        source={AppImages.yt_logo}
        style={styles.ytLogoStyle}
        resizeMode="contain"
      />
      <View style={styles.spaceContainer} />
      <PressableIcon
        iconSource={AppImages.ic_bell}
        iconPress={function (): void {
          Method.handleInDev('press bell');
        }}
      />
      <PressableIcon
        iconSource={AppImages.ic_search}
        iconPress={function (): void {
          Method.handleInDev('press search');
        }}
      />
      <Text
        onPress={() => {
          Method.handleInDev('profile avtar');
        }}
        style={styles.avtarText}>
        V
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  saContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: (54 * 2) / 2,
  },
  ytLogoStyle: {
    width: StyleConfig.countPixelRatio(89),
    height: StyleConfig.countPixelRatio(20),
    marginHorizontal: StyleConfig.smartWidthScale(12),
  },
  spaceContainer: {
    flex: 1,
  },
  avtarText: {
    fontSize: StyleConfig.countPixelRatio(18),
    fontFamily: StyleConfig.fontRegular,
    backgroundColor: 'green',
    paddingVertical: StyleConfig.countPixelRatio(4),
    paddingHorizontal: StyleConfig.countPixelRatio(11),
    marginHorizontal: StyleConfig.smartWidthScale(12),
    borderRadius: StyleConfig.countPixelRatio(22),
  },
});

export default TopAppBars;

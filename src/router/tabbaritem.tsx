import {StyleSheet, Text, Image, Pressable} from 'react-native';
import React, {memo, useCallback, useMemo} from 'react';
import StyleConfig from '../utils/StyleConfig';
import { Color } from '../utils/color';

const TabBarItem = (props: any) => {
  const {activeIcon, inActiveIcon, title, index, selectedIndex, onTabClick} =
    props;
  const isUploadIcon = useMemo(() => index === 2, []);
  const isSelected = useMemo(() => selectedIndex === index, [selectedIndex]);

  const handelItemPress = useCallback(() => {
    onTabClick(index);
  }, []);

  return (
    <Pressable
      android_ripple={{
        foreground: false,
        borderless: true,
        radius: 40,
      }}
      style={styles.container}
      onPress={handelItemPress}>
      <Image
        source={isSelected ? activeIcon : inActiveIcon}
        style={[styles.iconStyle, isUploadIcon ? styles.uploadIconStyle : {}]}
        resizeMode="contain"
      />
      {isUploadIcon ? null : <Text style={[styles.titleStyle]}>{title}</Text>}
    </Pressable>
  );
};

export default memo(TabBarItem);

const styles = StyleSheet.create({
  container: {
    width: StyleConfig.width / 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.balck,
  },
  iconStyle: {
    height: StyleConfig.countPixelRatio(24),
    width: StyleConfig.countPixelRatio(24),
    paddingVertical: StyleConfig.smartScale(15),
    tintColor: Color.white,
  },
  uploadIconStyle: {
    height: StyleConfig.countPixelRatio(37),
    width: StyleConfig.countPixelRatio(37),
  },
  titleStyle: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: StyleConfig.countPixelRatio(10),
    color: Color.titleColor,
  },
});

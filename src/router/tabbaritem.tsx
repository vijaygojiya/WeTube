import React, { memo, useCallback, useMemo } from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';

import { Color } from '../utils/color';
import StyleConfig from '../utils/StyleConfig';

const TabBarItem = (props: any) => {
  const { activeIcon, inActiveIcon, title, index, selectedIndex, onTabClick } =
    props;
  const isUploadIcon = useMemo(() => index === 2, []);
  const isSelected = useMemo(() => selectedIndex === index, [selectedIndex]);

  const handelItemPress = useCallback(() => {
    onTabClick(index);
  }, [selectedIndex]);

  return (
    <Pressable
      android_ripple={{
        foreground: false,
        borderless: true,
        radius: 40,
      }}
      style={styles.container}
      onPress={handelItemPress}
    >
      <Image
        source={isSelected ? activeIcon : inActiveIcon}
        style={[styles.iconStyle, isUploadIcon ? styles.uploadIconStyle : {}]}
        resizeMode='contain'
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
    height: StyleConfig.countPixelRatio(20),
    width: StyleConfig.countPixelRatio(20),
    marginTop: StyleConfig.countPixelRatio(8),
    margin: StyleConfig.countPixelRatio(4),
    tintColor: Color.white,
  },
  uploadIconStyle: {
    height: StyleConfig.countPixelRatio(36),
    width: StyleConfig.countPixelRatio(36),
    marginBottom: StyleConfig.smartScale(5),
  },
  titleStyle: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: StyleConfig.countPixelRatio(11),
    marginBottom: StyleConfig.countPixelRatio(4),
    marginHorizontal: StyleConfig.smartWidthScale(4),
    color: Color.titleColor,
  },
});

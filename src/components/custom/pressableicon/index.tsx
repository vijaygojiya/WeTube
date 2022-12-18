import {StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import StyleConfig from '../../../utils/StyleConfig';

const PressableIcon = props => {
  const {iconSource, iconPress} = props;
  return (
    <Pressable onPress={iconPress}>
      <Image
        source={iconSource}
        style={styles.iconStyle}
        resizeMode="contain"
      />
    </Pressable>
  );
};

export default PressableIcon;

const styles = StyleSheet.create({
  iconStyle: {
    height: StyleConfig.countPixelRatio(24),
    width: StyleConfig.countPixelRatio(24),
    margin: StyleConfig.countPixelRatio(12),
  },
});

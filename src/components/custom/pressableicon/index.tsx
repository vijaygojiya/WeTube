import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from 'react-native';

import { Color } from '../../../utils/color';
import StyleConfig from '../../../utils/StyleConfig';

const PressableIcon = (props: {
  iconSource: ImageSourcePropType;
  iconPress: () => void;
}) => {
  const { iconSource, iconPress } = props;
  return (
    <Pressable
      android_ripple={{
        color: Color.subTitleColor,
        borderless: true,
        radius: 24,
      }}
      onPress={iconPress}
    >
      <Image
        source={iconSource}
        style={styles.iconStyle}
        resizeMode='contain'
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

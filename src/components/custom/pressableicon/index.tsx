import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import { Color } from '../../../utils/color';
import StyleConfig from '../../../utils/StyleConfig';

const PressableIcon = (props: {
  iconSource: ImageSourcePropType;
  iconPress: () => void;
  iconStyle?: ImageStyle;
  containerStyle?: ViewStyle;
}) => {
  const { iconSource, iconPress, iconStyle, containerStyle } = props;
  return (
    <Pressable onPress={iconPress} style={containerStyle}>
      <Image
        source={iconSource}
        style={[styles.iconStyle, iconStyle]}
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
    tintColor: Color.white,
  },
});

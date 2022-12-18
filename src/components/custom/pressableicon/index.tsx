import { StyleSheet, Image, Pressable, ImageSourcePropType } from 'react-native';
import React from 'react';
import StyleConfig from '../../../utils/StyleConfig';
import { Color } from '../../../utils/color';

const PressableIcon = (props: { iconSource: ImageSourcePropType; iconPress: () => void }) => {
  const { iconSource, iconPress } = props;
  return (
    <Pressable android_ripple={{ color: Color.subTitleColor, borderless: true, radius: 24 }} onPress={iconPress}>
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

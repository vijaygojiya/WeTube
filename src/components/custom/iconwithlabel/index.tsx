import {ImageSourcePropType, ImageStyle} from 'react-native';
import {Text, View} from 'react-native';
import React, {useCallback, useRef} from 'react';
import Method from '../../../utils/method';
import PressableIcon from '../pressableicon';
import {styles} from './styles';

const IconWithLabel = (props: {
  label: string;
  icon: ImageSourcePropType;
  index: number;
}) => {
  const {label, icon, index} = props;
  console.log('calllinn');

  const iconStyle = useRef<ImageStyle>(overRideStyle);
  const overRideStyle = useCallback((): ImageStyle => {
    console.log('ca;l;');

    if (index === 1) {
      return {...styles.icon, ...styles.dislikeIconStyle};
    } else if (index === 2) {
      return {...styles.icon, ...styles.shareIconStyle};
    } else {
      return styles.icon;
    }
  }, []);
  return (
    <View style={styles.contaienr}>
      <PressableIcon
        iconSource={icon}
        iconStyle={iconStyle.current}
        iconPress={() => {
          Method.handleInDev('click');
        }}
      />
      <Text style={styles.titleStyle}>{label}</Text>
    </View>
  );
};

export default IconWithLabel;

import React, { memo, useMemo, useRef } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Video from 'react-native-video';
import AppImages from '../../../assets/images';
import { Color } from '../../../utils/color';
import Method from '../../../utils/method';

import StyleConfig from '../../../utils/StyleConfig';
import IconWithLabel from '../iconwithlabel';
import PressableIcon from '../pressableicon';

const controlButton = [
  {
    icon: AppImages.ic_like,
    label: '2.4k',
  },
  {
    icon: AppImages.ic_like,
    label: 'Dislike',
  },
  {
    icon: AppImages.ic_comment,
    label: '33k',
  },
  {
    icon: AppImages.ic_share,
    label: 'Share',
  },
  {
    icon: AppImages.ic_rotate,
    label: 'Remix',
  },
];


const ShortsVideoListItem = (props: {
  id: string;
  title: string;
  thumb: string;
  duration: string;
  uploadTime: string;
  views: number;
  author: string;
  sources: string;
  description: string;
  subscriber: string;
  isLive: boolean;
  selectedIndex: number;
  index: number;
}) => {
  const { sources, thumb, index, selectedIndex } = props;

  return (
    <View style={{flex:1}} >
      <Video
        paused={index === selectedIndex ? false : true}
        // paused={true}
        source={{ uri: sources[0] }}
        poster={thumb}
        style={styles.video}
        resizeMode='cover'
        posterResizeMode='cover'
      />
      <View style={styles.controlOverlayContainer}>
        <View style={styles.spaceContainer}>
          {controlButton.map((item, index) => {
            return (
              <IconWithLabel {...item} index={index} key={`index-${index}`} />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default memo(ShortsVideoListItem);

const styles = StyleSheet.create({
  video: {
    height: StyleConfig.height - StyleConfig.tabBarHeight,
    width: StyleConfig.width,
  },
  controlOverlayContainer: {
    ...StyleSheet.absoluteFillObject,
  },

  spaceContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

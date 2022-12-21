import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { memo } from 'react';
import Video from 'react-native-video';
import StyleConfig from '../../../utils/StyleConfig';
// const ScreenHeight = Dimensions.get('').height;
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
  const {
    sources,thumb,
    index,
    selectedIndex,
  } = props;
  return (
    <Video
      paused={index === selectedIndex ? false : true}
      source={{ uri: sources[0] }}
      poster={thumb}
      style={styles.video}
      resizeMode='cover'
      posterResizeMode='cover'
    />
  );
};

export default memo(ShortsVideoListItem);

const styles = StyleSheet.create({
  video: {
    height: StyleConfig.height - StyleConfig.tabBarHeight,
    width: StyleConfig.width,
  },
});

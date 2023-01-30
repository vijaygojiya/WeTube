import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Video, {OnProgressData} from 'react-native-video';
import {VideoDetailScreenProps} from '../../../typings';
import StyleConfig from '../../../utils/StyleConfig';
import {Color} from '../../../utils/color';
import Slider from '@react-native-community/slider';

// const getSecond = (hms) => {
//   var a = hms.split(':'); // split it at the colons

// // minutes are worth 60 seconds. Hours are worth 60 minutes.
// var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
// seconds;
// }

const VideoDetailScreen = (props: VideoDetailScreenProps) => {
  const {navigation, route} = props;
  const {thumbnailUrl, videoUrl, duration} = route.params.videoData;
  const [progress, setProgress] = React.useState(0);

  /**
   * For onprogress we fire listeners that
   * update our seekbar and timer.
   *
   * @param {object} data The video meta data
   */
  const onProgress = (data: OnProgressData) => {
    const {currentTime: cTime} = data;
    setProgress(cTime);
  };
  return (
    <View style={styles.container}>
      <Video
        poster={thumbnailUrl}
        source={{uri: videoUrl}}
        style={styles.video}
        posterResizeMode={'contain'}
        repeat={true}
        onProgress={onProgress}
      />
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor={Color.ytRed}
        thumbTintColor={'green'}
        maximumTrackTintColor="#000000"
      />
    </View>
  );
};

export default VideoDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.balck,
  },
  video: {
    width: StyleConfig.width,
    height: StyleConfig.width * (9 / 16),
  },
  slider: {
    width: StyleConfig.width,
    height: StyleConfig.smartScale(20),
    backgroundColor: 'red',
  },
});

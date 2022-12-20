import moment from 'moment';
import React, { memo } from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
} from 'react-native';

import AppImages from '../../../assets/images';
import { showToast } from '../../../utils/action';
import { Color } from '../../../utils/color';
import { dummyChannelPicutre } from '../../../utils/constant';
import Method from '../../../utils/method';
import PressableIcon from '../pressableicon';

import { styles } from './styles';

const HomeVidoeListItem = (props: {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  uploadTime: string;
  views: number;
  author: string;
  videoUrl: string;
  description: string;
  subscriber: string;
  isLive: boolean;
}) => {
  const { thumbnailUrl, duration, title, author, uploadTime, views } = props;
  console.log('renderin vide card');

  return (
    <Pressable android_ripple={{ color: Color.subTitleColor }}>
      <ImageBackground
        onError={(e) => {
          console.log('eeeethumbnailUrle', thumbnailUrl, e);
        }}
        source={{ uri: thumbnailUrl }}
        style={styles.thumbnailImageStyle}
      >
        <Text style={styles.durationTextStyle}>{duration}</Text>
      </ImageBackground>
      <View style={styles.footerContainer}>
        <Image
          source={{
            uri: dummyChannelPicutre,
          }}
          style={styles.channelPictureStyle}
        />
        <View style={styles.textInfoContainer}>
          <Text style={styles.videoTitleTextStyle} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.videoSubTitleTextStyle} numberOfLines={1}>
            {author} • {Method.getFormatedViewCount(views)} Views •{' '}
            {Method.getFormatedDate(uploadTime)}{' '}
          </Text>
        </View>
        <PressableIcon
          iconSource={AppImages.ic_more_info}
          iconPress={() => {
            // Alert.alert('','in dev')
            showToast('testing.');
          }}
        />
      </View>
    </Pressable>
  );
};

export default memo(HomeVidoeListItem);

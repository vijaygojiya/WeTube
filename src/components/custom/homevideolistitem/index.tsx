import React, {memo, FC} from 'react';
import {Image, ImageBackground, Pressable, Text, View} from 'react-native';

import AppImages from '../../../assets/images';
import {VideoType} from '../../../typeing';
import {showToast} from '../../../utils/action';
import {Color} from '../../../utils/color';
import {dummyChannelPicutre} from '../../../utils/constant';
import Method from '../../../utils/method';
import PressableIcon from '../pressableicon';

import {styles} from './styles';

interface Props extends VideoType {
  onItemClick: () => void;
}

const HomeVidoeListItem: FC<Props> = props => {
  const {
    thumbnailUrl,
    duration,
    title,
    author,
    uploadTime,
    views,
    onItemClick,
  } = props;
  return (
    <Pressable
      android_ripple={{color: Color.subTitleColor}}
      onPress={onItemClick}>
      <ImageBackground
        source={{uri: thumbnailUrl}}
        style={styles.thumbnailImageStyle}>
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
            showToast('testing.');
          }}
        />
      </View>
    </Pressable>
  );
};

export default memo(HomeVidoeListItem);

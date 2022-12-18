import { Text, View, Pressable, Image, ImageBackground } from 'react-native';
import React from 'react';
import { styles } from './styles';

const HomeVidoeListItem = (props: {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  uploadTime: string;
  views: string;
  author: string;
  videoUrl: string;
  description: string;
  subscriber: string;
  isLive: boolean;
}) => {
  const { thumbnailUrl, duration, title, author, uploadTime, views } = props;
  return (
    <Pressable>
      <ImageBackground onError={(e) => {
        console.log('eeeethumbnailUrle', thumbnailUrl, e);

      }} source={{ uri: thumbnailUrl }} style={styles.thumbnailImageStyle} ><Text style={styles.durationTextStyle} >{duration}</Text></ImageBackground>
      <View style={styles.footerContainer} >
        <Image source={{ uri: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }} style={styles.channelPictureStyle} />
        <View><Text style={styles.videoTitleTextStyle} numberOfLines={2} >{title}</Text>
          <Text style={styles.videoSubTitleTextStyle} numberOfLines={1} >{author} • {views} {uploadTime}</Text></View>
      </View>
    </Pressable>
  );
};

export default HomeVidoeListItem;

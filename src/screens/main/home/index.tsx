import { FlatList, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { styles } from './styles';
import TopAppBars from '../../../components/custom/topappbars';
import HomeVidoeListItem from '../../../components/custom/homevideolistitem';
import { videos } from '../../../utils/dummydata/videos';

const HomeScreen = () => {
  const renderVideoListItem = ({ item, index }) => {
    return <HomeVidoeListItem {...item} />;
  };
  const getKey = useCallback(
    (_, index) => {
      return `videoList-${index}`
    },
    [],
  )

  return (
    <View style={styles.screenBackground}>
      <TopAppBars />
      <FlatList data={videos} renderItem={renderVideoListItem} keyExtractor={getKey} showsVerticalScrollIndicator={false} bounces={false} />
    </View>
  );
};

export default HomeScreen;

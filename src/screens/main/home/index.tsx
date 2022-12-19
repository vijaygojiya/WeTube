import React, { useCallback } from 'react';
import { FlatList, Text, View } from 'react-native';

import HomeVidoeListItem from '../../../components/custom/homevideolistitem';
import TopAppBars from '../../../components/custom/topappbars';
import { videos } from '../../../utils/dummydata/videos';
import { styles } from './styles';

const HomeScreen = () => {
  const renderVideoListItem = ({ item }) => {
    return <HomeVidoeListItem {...item} />;
  };

  const getKey = useCallback((_: any, index: number) => {
    return `videoList-${index}`;
  }, []);

  return (
    <View style={styles.screenBackground}>
      <TopAppBars />
      <FlatList
        data={videos}
        renderItem={renderVideoListItem}
        keyExtractor={getKey}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
};

export default HomeScreen;

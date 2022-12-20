import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';

import HomeVidoeListItem from '../../../components/custom/homevideolistitem';
import TopAppBars from '../../../components/custom/topappbars';
import Collapsible from '../../../components/library/collapsible';
import { videos } from '../../../utils/dummydata/videos';
import { styles } from './styles';

const HomeScreen = () => {
  const [isHeaderHide, setHeaderHide] = useState<boolean>(false);
  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    let currentOffset = event.nativeEvent.contentOffset.y;
    if (currentOffset === 0) {
      setHeaderHide(false);
    } else {
      setHeaderHide(true)
    }

  }


  const renderVideoListItem = ({ item }) => {
    return <HomeVidoeListItem {...item} />;
  };

  const getKey = useCallback((_: any, index: number) => {
    return `videoList-${index}`;
  }, []);

  return (
    <View style={styles.screenBackground}>
      <Collapsible collapsed={isHeaderHide} duration={600}  >
        <TopAppBars />
      </Collapsible>
      <FlatList
        data={videos}
        renderItem={renderVideoListItem}
        keyExtractor={getKey}
        showsVerticalScrollIndicator={false}
        bounces={false}
        onScroll={handleOnScroll}
      />
    </View>
  );
};

export default HomeScreen;

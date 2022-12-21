import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Dimensions, FlatList } from 'react-native';
import ShortsVideoListItem from '../../../components/custom/shortsvideolistitem';
import { videos } from '../../../utils/dummydata/videos';
import StyleConfig from '../../../utils/StyleConfig';
const shortsVideo = require('../../../utils/dummydata/shorts.json');
const ShortsScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderShortItem = useCallback(({ item, index }) => {
    return (
      <ShortsVideoListItem
        {...item}
        index={index}
        selectedIndex={selectedIndex}
      />
    );
  }, [selectedIndex])

  const onViewRef = useRef((viewableItems: any) => {
    if (viewableItems?.viewableItems?.length > 0)
      setSelectedIndex(viewableItems.viewableItems[0].index || 0);
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 80 });

  return (
    <FlatList
      data={shortsVideo.videos}
      renderItem={renderShortItem}
      getItemLayout={(_data, index) => ({
        length: StyleConfig.height,
        offset: StyleConfig.height * index,
        index,
      })}
      snapToAlignment={'start'}
      pagingEnabled={true}
      onViewableItemsChanged={onViewRef.current}
      viewabilityConfig={viewConfigRef.current}
    />
  );
};

export default ShortsScreen;

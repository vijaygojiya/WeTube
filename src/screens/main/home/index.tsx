import React, { useCallback } from 'react';
import { FlatList, Text, View } from 'react-native';

import HomeVidoeListItem from '../../../components/custom/homevideolistitem';
import TopAppBars from '../../../components/custom/topappbars';
// import Collapsible from '../../../components/library/collapsible';
import { homeFlatlistRef } from '../../../utils/action';
import { videos } from '../../../utils/dummydata/videos';
import { styles } from './styles';

const HomeScreen = () => {
  // const [isHeaderHide, setHeaderHide] = useState<boolean>(false);
  // const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
  //   let currentOffset = event.nativeEvent.contentOffset.y;
  //   if (currentOffset < 150) {
  //     setHeaderHide(false);
  //   } else {
  //     setHeaderHide(true)
  //   }

  // }

  const renderVideoListItem = ({ item }) => {
    return <HomeVidoeListItem {...item} />;
  };

  const getKey = useCallback((_: any, index: number) => {
    return `videoList-${index}`;
  }, []);

  return (
    <View style={styles.screenBackground}>
      {/* <Collapsible collapsed={isHeaderHide} duration={600}  > */}
      <TopAppBars />
      {/* </Collapsible> */}
      <FlatList
        ref={homeFlatlistRef}
        data={videos}
        renderItem={renderVideoListItem}
        keyExtractor={getKey}
        showsVerticalScrollIndicator={false}
        bounces={false}
        // onScroll={handleOnScroll}
      />
    </View>
  );
};

export default HomeScreen;

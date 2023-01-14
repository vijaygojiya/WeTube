import React, {useCallback, useRef} from 'react';
import {Animated, View} from 'react-native';
// import Animated, {diffClamp, interpolate} from 'react-native-reanimated';

import HomeVidoeListItem from '../../../components/custom/homevideolistitem';
import TopAppBars from '../../../components/custom/topappbars';
// import Collapsible from '../../../components/library/collapsible';
import {homeFlatlistRef} from '../../../utils/action';
import {videos} from '../../../utils/dummydata/videos';
import {getCloser} from '../../../utils/utils';
import {styles} from './styles';

const {diffClamp} = Animated;
const headerHeight = 58 * 2;

const HomeScreen = () => {
  const scrollY = useRef(new Animated.Value(0));
  const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight);

  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -(headerHeight / 2)],
  });

  const translateYNumber = useRef();

  translateY.addListener(({value}) => {
    translateYNumber.current = value;
  });

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {y: scrollY.current},
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  const handleSnap = ({nativeEvent}) => {
    const offsetY = nativeEvent.contentOffset.y;
    if (
      !(
        translateYNumber.current === 0 ||
        translateYNumber.current === -headerHeight / 2
      )
    ) {
      if (homeFlatlistRef.current) {
        homeFlatlistRef.current.scrollToOffset({
          offset:
            getCloser(translateYNumber.current, -headerHeight / 2, 0) ===
            -headerHeight / 2
              ? offsetY + headerHeight / 2
              : offsetY - headerHeight / 2,
        });
      }
    }
  };
  const renderVideoListItem = ({item}) => {
    return <HomeVidoeListItem {...item} />;
  };

  const getKey = useCallback((_: any, index: number) => {
    return `videoList-${index}`;
  }, []);

  return (
    <View style={styles.screenBackground}>
      <Animated.View style={[styles.header, {transform: [{translateY}]}]}>
        <TopAppBars />
      </Animated.View>
      <Animated.FlatList
        scrollEventThrottle={16}
        ref={homeFlatlistRef}
        data={videos}
        renderItem={renderVideoListItem}
        keyExtractor={getKey}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{paddingTop: headerHeight / 2}}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleSnap}
      />
    </View>
  );
};

export default HomeScreen;

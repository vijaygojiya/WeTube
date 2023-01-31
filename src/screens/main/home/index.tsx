import React, {useCallback, useContext, useRef} from 'react';
import {Animated, View} from 'react-native';
import HomeVidoeListItem from '../../../components/custom/homevideolistitem';
import TopAppBars from '../../../components/custom/topappbars';
import {Routes} from '../../../router/routes';
import {PlayerContext} from '../../../state/context';
import {setPlayerPoint} from '../../../state/reducer';
import {VideoType} from '../../../typeing';
import {HomeScreenProps} from '../../../typings';
import {homeFlatlistRef} from '../../../utils/action';
import {videos} from '../../../utils/dummydata/videos';
import {getCloser} from '../../../utils/utils';
import {styles} from './styles';

const {diffClamp} = Animated;
const headerHeight = 54 * 2;

const HomeScreen = (Props: HomeScreenProps) => {
  const {navigation} = Props;
  const {dispatch} = useContext(PlayerContext);
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

  const openVideoDetailScreen = (data: VideoType) => {
    navigation.navigate(Routes.VideoDetail, {videoData: data});
  };
  const renderVideoListItem = ({item, index}: {item: VideoType}) => {
    const handleVideoItemClick = () => {
      // openVideoDetailScreen(item);
      dispatch(setPlayerPoint(0));
    };
    return <HomeVidoeListItem {...item} onItemClick={handleVideoItemClick} />;
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

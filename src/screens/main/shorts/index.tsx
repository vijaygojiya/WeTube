import React, {useState} from 'react';
import {Text, View} from 'react-native';
import AppImages from '../../../assets/images';
import PressableIcon from '../../../components/custom/pressableicon';

import ShortsVideoListItem from '../../../components/custom/shortsvideolistitem';
import Method from '../../../utils/method';
import {styles} from './styles';

const headerIcon = [
  {
    icon: AppImages.ic_search,
  },
  {
    icon: AppImages.ic_camera,
  },
  {
    icon: AppImages.ic_more_info,
  },
];
const shortsVideo = require('../../../utils/dummydata/shorts.json');
const ShortsScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderShortItem = ({item, index}) => {
    return (
      <ShortsVideoListItem
        {...item}
        index={index}
        selectedIndex={selectedIndex}
      />
    );
  };

  const handleChangeIndexValue = ({index}: {index: number}) => {
    setSelectedIndex(index);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          position: 'absolute',
          top: 10,
          left: 0,
          right: 0,
          flexDirection: 'row',
          alignItems: 'center',
          zIndex: 33,
        }}>
        <Text style={{flex: 1}}>Shorts</Text>
        {headerIcon.map((item, index) => {
          const {icon} = item;
          return (
            <PressableIcon
              key={index}
              iconSource={icon}
              iconPress={function (): void {
                Method.handleInDev('icon click');
              }}
            />
          );
        })}
      </View>
      <View style={styles.flContainer}>
        {/* <FlatList
          // onChangeIndex={handleChangeIndexValue}
          // vertical={true}
          keyExtractor={(item, index) => '' + index}
          data={shortsVideo.videos}
          renderItem={renderShortItem}
          onEndReachedThreshold={20}
          removeClippedSubviews={true}
        /> */}
        {/*   <FlatList
          data={shortsVideo.videos}
          renderItem={renderShortItem}
          getItemLayout={(_data, index) => ({
            length: StyleConfig.height - StyleConfig.tabBarHeight,
            offset: StyleConfig.height - StyleConfig.tabBarHeight * index,
            index,
          })}
          showsVerticalScrollIndicator={false}
          pagingEnabled={true}
          snapToInterval={StyleConfig.height - StyleConfig.tabBarHeight}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          automaticallyAdjustContentInsets={true}
          onEndReachedThreshold={20}
          removeClippedSubviews={true}
        />*/}
      </View>
    </View>
  );
};

export default ShortsScreen;

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';

import AppImages from '../assets/images';
import { Always, Never } from '../utils/constant';
import { Type_Of_TabBar } from '../utils/enum';
import { String } from '../utils/string';
import StyleConfig from '../utils/StyleConfig';
import Routes from './routes';
import TabBarItem from './tabbaritem';

const TabBarList = [
  {
    title: String.Home,
    activeIcon: AppImages.ic_home_filled,
    inActiveIcon: AppImages.ic_home_outline,
    navigation: Routes.Home,
  },
  {
    title: String.Short,
    activeIcon: AppImages.ic_shorts_filled,
    inActiveIcon: AppImages.ic_shorts_outline,
    navigation: Routes.Short,
  },
  {
    title: String.Upload,
    activeIcon: AppImages.ic_plus,
    inActiveIcon: AppImages.ic_plus,
    navigation: Routes.Subscriptions,
  },
  {
    title: String.Subscriptions,
    activeIcon: AppImages.ic_subscriptions_filled,
    inActiveIcon: AppImages.ic_subscriptions_outline,
    navigation: Routes.Subscriptions,
  },
  {
    title: String.Library,
    activeIcon: AppImages.ic_library_filled,
    inActiveIcon: AppImages.ic_library_outline,
    navigation: Routes.Library,
  },
];

const CustomTabBar = (props: BottomTabBarProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { navigation } = props;

  const onTabClick = useCallback((index: number) => {
    setSelectedIndex(index);
    switch (index) {
      case Type_Of_TabBar.Home:
        navigation.navigate(Routes.Home);
        break;
      case Type_Of_TabBar.Shorts:
        navigation.navigate(Routes.Short);
        break;
      case Type_Of_TabBar.Upload:
        // handleSheetChanges();
        break;
      case Type_Of_TabBar.Subscriptions:
        navigation.navigate(Routes.Subscriptions);
        break;
      case Type_Of_TabBar.Library:
        navigation.navigate(Routes.Library);
        break;
    }
  }, []);

  function renderTabBarItem({ item, index }: { item: any; index: number }) {
    return (
      <TabBarItem
        {...item}
        index={index}
        key={index}
        selectedIndex={selectedIndex}
        onTabClick={onTabClick}
      />
    );
  }

  const listKeys = useCallback(
    (_: any, index: number) => `tabBarItem-${index}`,
    [],
  );

  return (
    <SafeAreaView
      forceInset={{ top: Never, bottom: Always }}
      style={styles.saContainer}
    >
      <FlatList
        data={TabBarList}
        horizontal={true}
        renderItem={renderTabBarItem}
        keyExtractor={listKeys}
        overScrollMode='never'
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.flTabContainer}
      />
    </SafeAreaView>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  saContainer: {
    backgroundColor: 'white',
    borderTopColor: 'grey',
    borderTopWidth: StyleConfig.countPixelRatio(0.3),
  },
  flTabContainer: {
    justifyContent: 'space-around',
    flex: 1,
  },
});

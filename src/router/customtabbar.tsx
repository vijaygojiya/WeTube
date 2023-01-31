import {Portal} from '@gorhom/portal';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet } from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppImages from '../assets/images';
import {clamp} from '../components/library/rnawesomeslider/src/utils';
import HomeScreen from '../screens/main/home';
import LibraryScreen from '../screens/main/library';
import ShortsScreen from '../screens/main/shorts';
import SubscriptionsScreen from '../screens/main/subscriptions';
import {width, height} from '../screens/others/utils';
import {bottomSheetRef, homeScreenScrollToTop} from '../utils/action';
import {Color} from '../utils/color';
import {VIDEO_MIN_HEIGHT} from '../utils/constant';
import {Type_Of_TabBar} from '../utils/enum';
import {String} from '../utils/string';
import StyleConfig from '../utils/StyleConfig';
import {Routes} from './routes';
import Tabbaritem from './tabbaritem';

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

const Tab = createBottomTabNavigator();

const BOTTOM_TAB_HEIGHT = StyleConfig.tabBarHeight;

interface Props extends BottomTabBarProps {
  videoTranslateY: Animated.SharedValue<number>;
}

const BottomTabNavigator = ({videoTranslateY, navigation}: Partial<Props>) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const {colors} = useTheme();
  const insets = useSafeAreaInsets();

  const getBottomtabStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      videoTranslateY.value,
      [0, height - BOTTOM_TAB_HEIGHT - VIDEO_MIN_HEIGHT - insets.bottom],
      [BOTTOM_TAB_HEIGHT + 44, 0],
    );
    const opacity = interpolate(
      videoTranslateY.value,
      [0, height - BOTTOM_TAB_HEIGHT - VIDEO_MIN_HEIGHT - insets.bottom],
      [0, 1],
    );
    return {
      transform: [
        {
          translateY: clamp(translateY, 0, 80),
        },
      ],
      opacity,
    };
  }, [videoTranslateY]);

  const openSheet = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };
  const onTabClick = useCallback(
    (index: number) => {
      setSelectedIndex(index);
      switch (index) {
        case Type_Of_TabBar.Home:
          if (selectedIndex === 0) {
            homeScreenScrollToTop();
          } else {
            navigation.navigate(Routes.Home);
          }
          break;
        case Type_Of_TabBar.Shorts:
          navigation.navigate(Routes.Short);
          break;
        case Type_Of_TabBar.Upload:
          openSheet();
          break;
        case Type_Of_TabBar.Subscriptions:
          navigation.navigate(Routes.Subscriptions);
          break;
        case Type_Of_TabBar.Library:
          navigation.navigate(Routes.Library);
          break;
      }
    },
    [selectedIndex],
  );

  function renderTabBarItem({item, index}: {item: any; index: number}) {
    return (
      <Tabbaritem
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

  const renderTabBar = () => {
    return (
      <Portal>
        <Animated.View
          style={[
            {
              height: BOTTOM_TAB_HEIGHT + insets.bottom,
              backgroundColor: colors.background,
              paddingBottom: insets.bottom,
              ...styles.saContainer,
            },
            getBottomtabStyle,
          ]}>
          <FlatList
            data={TabBarList}
            horizontal={true}
            renderItem={renderTabBarItem}
            keyExtractor={listKeys}
            overScrollMode="never"
            showsHorizontalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={styles.flTabContainer}
          />
        </Animated.View>
      </Portal>
    );
  };
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={{
        lazy: true,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={renderTabBar}>
      <Tab.Screen
        key="HomeScreenTab"
        name={Routes.Home}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          unmountOnBlur: true,
        }}
        key="ShortScreenTab"
        name={Routes.Short}
        component={ShortsScreen}
      />
      <Tab.Screen
        key="SubscriptionsScreenTab"
        name={Routes.Subscriptions}
        component={SubscriptionsScreen}
      />
      <Tab.Screen
        key="LibraryScreenTab"
        name={Routes.Library}
        component={LibraryScreen}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;

const styles = StyleSheet.create({
  saContainer: {
    borderTopColor: Color.subTitleColor,
    borderTopWidth: StyleConfig.countPixelRatio(0.5),
    width: width,
    position: 'absolute',
    bottom: 0,
  },
  flTabContainer: {
    justifyContent: 'space-around',
    flex: 1,
  },
});

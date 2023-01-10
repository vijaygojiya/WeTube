import BottomSheet from '@gorhom/bottom-sheet';
import * as React from 'react';
import { FlatList } from 'react-native';

export const toastRef = React.createRef<any>();

export const showToast = (text: string) => {
  toastRef.current?.show(text);
};

export const bottomSheetRef = React.createRef<BottomSheet>();
export const homeFlatlistRef = React.createRef<FlatList>();

export const homeScreenScrollToTop = () => {
  homeFlatlistRef?.current?.scrollToOffset({ animated: true, offset: 0 });
};

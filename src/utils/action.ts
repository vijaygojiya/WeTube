import BottomSheet from '@gorhom/bottom-sheet';
import * as React from 'react';

export const toastRef = React.createRef<any>();

export const showToast = (text: string) => {
  toastRef.current?.show(text);
};


export const bottomSheetRef = React.createRef<BottomSheet>(null);
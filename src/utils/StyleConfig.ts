import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const isIphone = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const widthPer = width / 100;
const heightPer = height / 100;
const deviceType = width < 480 ? 'phone' : 'tablet';
const iPhoneX = Platform.OS === 'ios' && (height === 812 || height === 896);
const ratioCount = Math.sqrt(height * height + width * width) / 1000;

const isTablet = () => {
  if (isIphone) {
    return Platform.isPad;
  } else {
    return height / width <= 1.6;
  }
};

const APP_FONTS = {
  ROBOTO_Light: 'Roboto-Light',
  ROBOTO_REGULAR: 'Roboto-Regular',
  ROBOTO_MEDIUM: 'Roboto-Medium',
  ROBOTO_ITALIC: 'Roboto-Italic',
  ROBOTO_BOLD: 'Roboto-Bold',
  ROBOTO_BOLDITALIC: 'Roboto-BoldItalic',
};
export default {
  countPixelRatio: (size: number) => size * ratioCount,
  responsiveHeight: (size: number) => size * heightPer,
  responsiveWidth: (size: number) => size * widthPer,
  smartScale: (value: number) => {
    const tempHeight =
      Platform.OS === 'ios' ? (iPhoneX ? height - 78 : height) : height - 24;
    if (deviceType === 'phone') {
      return (value * tempHeight) / 667;
    }
    return (value * tempHeight) / 667;
  },
  smartWidthScale: (value: number) => {
    const tempWidth = width;
    if (deviceType === 'phone') {
      return (value * tempWidth) / 375;
    }
    return (value * tempWidth) / 375;
  },
  fontLight: APP_FONTS.ROBOTO_Light,
  fontRegular: APP_FONTS.ROBOTO_REGULAR,
  fontMedium: APP_FONTS.ROBOTO_MEDIUM,
  fontBold: APP_FONTS.ROBOTO_BOLD,
  fontItalic: APP_FONTS.ROBOTO_ITALIC,
  fontBoldItalic: APP_FONTS.ROBOTO_BOLDITALIC,
  width,
  height,
  isPhone: !isTablet(),
  isTab: isTablet(),
  isIphone,
  isAndroid,
};

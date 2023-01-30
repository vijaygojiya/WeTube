import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Routes} from '../router/routes';
import {VideoType} from '../typeing';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type VideoDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'VideoDetail'
>;

export type RootStackParamList = {
  [Routes.MainNav]: undefined;
  [Routes.Home]: undefined;
  [Routes.Profile]: undefined;
  [Routes.VideoDetail]: {videoData: VideoType};
};

import { createTheme } from '../components/theme';
import IMAGES from './images';
import ICONS from './icons';
import COLORS from './colors';
import language from './language';
import { Platform } from 'react-native';
// export const Language = language
export const {
  ThemeProvider,
  useStyle,
  createStyle,
  colors,
  fonts,
  icons,
  images,
  sizes,
} = createTheme({
  sizeBase: 16,
  colors: COLORS,
  fonts: {
    en: {
      Bold: Platform.OS === 'ios' ? 'Poppins Bold' : 'Poppins-Bold',
      Light: Platform.OS === 'ios' ? 'Poppins Light' : 'Poppins-Light',
      Regular: Platform.OS === 'ios' ? 'Poppins Regular' : 'Poppins-Regular',
      SemiBold: Platform.OS === 'ios' ? 'Poppins SemiBold' : 'Poppins-SemiBold',
      Medium: Platform.OS === 'ios' ? 'Poppins Medium' : 'Poppins-Medium',
    },
  },
  icons: ICONS,
  images: IMAGES,
  // language,
});

export type IconSourceType = keyof typeof icons;
export type ImagesSourceType = keyof typeof images;
export type BaseColorType = keyof typeof colors.light;

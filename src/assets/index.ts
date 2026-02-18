import { createTheme } from '../components/theme';
import IMAGES from './images';
import ICONS from './icons';
import COLORS from './colors';
import language from './language';
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
      Bold: 'Poppins-Bold',
      Light: 'Poppins-Light',
      Regular: 'Poppins-Regular',
      SemiBold: 'Poppins-SemiBold',
      Medium: 'Poppins-Medium',
    },
  },
  icons: ICONS,
  images: IMAGES,
  // language,
});

export type IconSourceType = keyof typeof icons;
export type ImagesSourceType = keyof typeof images;
export type BaseColorType = keyof typeof colors.light;

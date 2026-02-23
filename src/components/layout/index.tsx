import {
  View as ViewBase,
  Text as TextBase,
  Image as ImageBase,
  Pressable as PressBase,
  ImageBackground as BaseImageBackground,
  FlatList as FlatListBase,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Animated,
  PressableProps,
} from 'react-native';
import ReAnimated from 'react-native-reanimated';
import { withStyleProps } from './withStyleProps';
import { colors, fonts, icons, images, sizes } from '@assets';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatListProps,
  HorizontalCardListProps,
  IconProps,
  ImageBackgroundProps,
  ImageProps,
  LayoutTextProp,
  ScrollViewProps,
  ViewProps,
} from './types';

export const View = withStyleProps<ViewProps>(ViewBase)();
export const AnimatedView = withStyleProps<ViewProps>(Animated.View)();
export const ReAnimatedView = withStyleProps<ViewProps>(ReAnimated.View)();
export const ImageBackground = withStyleProps<
  Omit<Omit<Omit<ImageBackgroundProps, 'height'>, 'width'>, 'borderRadius'>
>(
  forwardRef(({ src, ...props }, ref) => (
    <BaseImageBackground
      ref={ref}
      {...props}
      source={props.source || images[src]}
    />
  )),
)(options => ({
  style: {
    ...(!!options.conditions.size
      ? {
          height: options.conditions.size,
          width: options.conditions.size,
        }
      : {}),
  },
}));
export const Safe = withStyleProps<ViewProps>(
  forwardRef(({ style, ...props }, ref) => (
    <SafeAreaView style={styles.page}>
      <ViewBase style={[style, styles.page]} {...props} />
    </SafeAreaView>
  )),
)();
export const Page = withStyleProps<ScrollViewProps>(
  forwardRef(({ style, ...props }, ref) => {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style}
        style={[styles.page]}
        horizontal={props.row}
        {...props}
      />
    );
  }),
)();
export const Scroll = withStyleProps<ScrollViewProps>(
  forwardRef(({ style, ...props }, ref) => {
    return (
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={style}
          horizontal={props.row}
          {...props}
        />
      </View>
    );
  }),
)();
export const Strike = () => <View height={1} backgroundColor="outline" />;
export const HorizontalCardList = withStyleProps<HorizontalCardListProps>(
  forwardRef(
    ({ style, ListHeaderComponent, ListFooterComponent, ...props }, ref) => {
      return (
        <>
          {ListHeaderComponent && <ListHeaderComponent {...props} />}
          <FlatListBase
            {...props}
            ListHeaderComponent={props.FirstCard}
            ListFooterComponent={props.LastCard}
            contentContainerStyle={style}
            style={[styles.page]}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          />
          {ListFooterComponent && <ListFooterComponent {...props} />}
        </>
      );
    },
  ),
)(options => ({
  style: {
    flexDirection: 'row',
    paddingHorizontal: options.sizes.layout.b,
    gap: options.sizes.layout.b,
  },
}));
export const FlatList = withStyleProps<FlatListProps>(
  forwardRef(({ style, ...props }, ref) => {
    return (
      <FlatListBase
        {...props}
        ref={ref}
        style={[!!props.page && styles.page]}
        contentContainerStyle={style}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    );
  }),
)();
export const Pressable = withStyleProps<PressableProps>(PressBase)();
export const Image = withStyleProps<
  Omit<Omit<Omit<ImageProps, 'height'>, 'width'>, 'borderRadius'>
>(
  forwardRef(({ src, ...props }, ref) => {
    return (
      <ImageBase ref={ref} {...props} source={props.source || images[src]} />
    );
  }),
)(options => ({
  style: {
    ...(!!options.conditions.size
      ? {
          height: options.conditions.size,
          width: options.conditions.size,
        }
      : {}),
    ...(!!options.conditions.fill
      ? {
          height: '100%',
          width: '100%',
        }
      : {}),
  },
}));
// export const Icon = withStyleProps<IconProps>(
//   forwardRef(({ name, ...props }, ref) => {
//     return (
//       <ImageBase
//         ref={ref}
//         resizeMode="contain"
//         {...props}
//         source={props.source || icons[name]}
//       />
//     );
//   }),
// )(options => ({
//   style: {
//     height: sizes.icon[options.conditions.size || 's'],
//     width: sizes.icon[options.conditions.size || 's'],
//     tintColor: options.colors[options.conditions.color],
//   },
// }));
// export const Text = withStyleProps<LayoutTextProp>(
//   forwardRef(function (prop, ref) {
//     const { t, i18n } = useTranslation();
//     console.log(Object.keys(options?.fonts));
// console.log(Object.keys(options?.colors));

//     return (
//       <TextBase {...prop} ref={ref}>
//         {/* {!!prop.text?t("common:"+prop.text):""}{prop.children || ""} */}
//         {prop.text || ''}
//         {prop.children || ''}
//       </TextBase>
//     );
//   }),
// )(options => ({
//   style: {
//     fontFamily: !!options.conditions.font
//       ? options.fonts[options.conditions.font as keyof typeof fonts]
//       : options.fonts.Regular,
//     fontSize: !!options.conditions.size
//       ? options.sizes.text[options.conditions.size as keyof typeof sizes.text]
//       : sizes.text.body,
//     color: !!options.conditions.color
//       ? options.colors[options.conditions.color as keyof typeof colors.light]
//       : options.colors.onBackground,
//     textAlign: options.conditions.textAlign == 'center' ? 'center' : undefined,
//     textDecorationLine: options.conditions.line,
//   },
// }));


export const Icon = withStyleProps<IconProps>(
  forwardRef(({ name, tintColor, style, ...rest }: any, ref) => {
    return (
      <ImageBase
        ref={ref}
        resizeMode="contain"
        source={rest.source || icons[name]}
        {...rest}
        style={[
          style, // <-- withStyleProps / user style (base)
          tintColor ? { tintColor } : null, // <-- ALWAYS last (override)
        ]}
      />
    );
  }),
)(options => {
  const sizeKey = options.conditions.size || 's';
  const colorKey = options.conditions.color;

  return {
    style: {
      height: sizes.icon[sizeKey],
      width: sizes.icon[sizeKey],
      ...(colorKey ? { tintColor: options.colors[colorKey] } : {}),
    },
  };
});





export const Text = withStyleProps<LayoutTextProp>(
  forwardRef(function Text(prop, ref) {
    const { text, children, ...rest } = prop;

    return (
      <TextBase {...rest} ref={ref}>
        {text ?? ''}
        {children ?? ''}
      </TextBase>
    );
  }),
)(options => {
  console.log("FONT CONDITION:", options.conditions.font);
  console.log("FONTS KEYS:", Object.keys(options.fonts));
  const fontKey = options.conditions.font as string | undefined;
  const colorKey = options.conditions.color as string | undefined;
  const sizeKey = options.conditions.size as string | undefined;

  const resolvedFont =
    (fontKey && (options.fonts as any)[fontKey]) ||
    (fontKey && (options.fonts as any)[fontKey?.toLowerCase()]) ||
    options.fonts.Regular;

  const resolvedColor =
    (colorKey && (options.colors as any)[colorKey]) ||
    (colorKey && (options.colors as any)[colorKey?.toLowerCase()]) ||
    options.colors.onBackground;

  const resolvedSize =
    (sizeKey && options.sizes.text?.[sizeKey as any]) || sizes.text.body;

  return {
    style: {
      fontFamily: resolvedFont,
      fontSize: resolvedSize,
      color: resolvedColor,
      textAlign: options.conditions.textAlign === 'center' ? 'center' : undefined,
      textDecorationLine: options.conditions.line,
    },
  };
});



const styles = StyleSheet.create({
  page: { flex: 1 },
});

export * from './parallax';
export * from './button';

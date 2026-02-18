import React, { forwardRef, JSX, useRef, useState } from 'react';
import { AnimatedView, ReAnimatedView, Text, View } from '../../../layout';
import {
  Animated,
  TextInput,
  TextInputProps,
  useAnimatedValue,
} from 'react-native';
import { colors, fonts, sizes, useStyle } from '@assets';

export interface BaseTextInputProps extends TextInputProps {
  id?: string;
  next?: string;
  focusDisable?: boolean;
  error?: string[];
  left?: () => JSX.Element | null;
  right?: () => JSX.Element;
  leftDull?: () => JSX.Element | null;
  rightDull?: () => JSX.Element;
  label?: string;
  purpose?: string;
  with?: number;
  backgroung?: boolean;
}

export const BaseInput = forwardRef(
  (
    { editable = true, focusDisable = false, ...props }: BaseTextInputProps,
    ref,
  ) => {
    const [isFocused, setFocus] = useState(false);

    const Focus = useRef(new Animated.Value(0)).current;
    const [style] = useStyle(({ colors, fonts, sizes }) => ({
      textInput: {
        flex: 1,
        color: editable ? colors.onBackground : colors.onSurface,
        fontFamily: fonts.Regular,
        fontSize: sizes.text.h6,
      },
      container: {
        //@ts-ignore
        backgroundColor: Focus.interpolate({
          inputRange: [0, 1],
          outputRange: props.backgroung
            ? [colors.onBtn, colors.onBtn]
            : [colors.control, colors.background],
        }),
        //@ts-ignore
        borderColor: Focus.interpolate({
          inputRange: [0, 1],
          outputRange: [colors.control, colors.primary],
        }),
      },
    }));
    return (
      <View gap="s" width={props.with}>
        {!!props.label && <Text font="Bold">{props.label}</Text>}
        <AnimatedView
          row
          // height={props.multiline ? 120 : sizes.control.height}
          height={props.multiline ? 120 : props?.height || sizes.control.height}
          // borderWidth={1}
          borderRadius={props.purpose === 'Search' ? 'xl' : 'b'}
          backgroundColor='translucentBackground'
        
          paddingHorizontal
          shadow={props.purpose === 'Search' ? true : false}
          //@ts-ignore
          style={[style.container, { gap: props.left ? 10 : 0 }]}
        >
          <View align="mid">
            {/* {props.left?.()} */}
            {isFocused ? props.left?.() : props.leftDull?.()}
          </View>
          <TextInput
            {...props}
            returnKeyType={
              props.multiline ? 'default' : !!props.next ? 'next' : 'done'
            }
            editable={editable && !focusDisable}
            placeholderTextColor={colors.light.onSurfaceVariant}
            onFocus={() => {
              Animated.timing(Focus, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
              }).start();
              setFocus(true);
            }}
            onBlur={() => {
              Animated.timing(Focus, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
              }).start();
              setFocus(false);
            }}
            style={[
              style?.textInput,
              {
                textAlignVertical: 'center',
              },
            ]}
            ref={ref}
          />
          <View align="mid">
            {/* {props.right?.()} */}
            {isFocused ? props.right?.() : props.rightDull?.()}
          </View>
        </AnimatedView>
        {!!props.error && !!props.error.length && (
          <ReAnimatedView>
            <Text font="Bold" size="small" color="error" paddingHorizontal>
              {props.error[0]}
            </Text>
          </ReAnimatedView>
        )}
      </View>
    );
  },
);

import { colors, sizes } from '@assets';
import { Pressable, Text } from '.';
import { ButtonProps } from './types';
import { useFormSubmit } from '../form';
import { ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Button = ({ style, type = 'Solid', ...props }: ButtonProps) => {
  const BorderColor = {
    Solid: 'primary',
    Outline: 'title',
    LightDiscourage: 'errorContainer',
    Dull: 'surfaceVariant',
    Error: 'error',
  };
  const BackgroundColor = {
    Solid: 'onBtn',
    Outline: 'background',
    Error: 'error',
    LightDiscourage: 'errorContainer',
    Dull: 'surfaceVariant',
  };
  const Color = {
    Solid: 'onPrimary',
    Outline: 'title',
    LightDiscourage: 'error',
    Dull: 'subHeading',
    Black: 'subHeading',
    Error: 'white',
  };
  const { onPress, Loading } = useFormSubmit(
    props.submitOnPress,
    props.onPress,
  );

  return (
    <LinearGradient
      style={{ borderRadius: 60 }}
      colors={
        props.background ? ['#A85155', '#DB3F50'] : ['#A20C13', '#A8474C']
      }
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Pressable
        // borderWidth={1}
        width={props.width ? props.width : '100%'}
        //@ts-ignore
        borderColor={BorderColor[type]}
        //@ts-ignore
        backgroundColor={props.background ? BackgroundColor[type] : ''}
        borderRadius="xl"
        align="mid"
        // height={props.height ? props.height : sizes.control.height}
        height={63}
        {...props}
        onPress={onPress}
      >
        {Loading ? (
          <ActivityIndicator color={colors.light[Color[type]]} />
        ) : (
          <Text
            //@ts-ignore
            color={Color[type]}
            size="h5"
            font="Bold"
            paddingHorizontal
            text={props.label}
            style={props.texyStyle}
          />
        )}
      </Pressable>
    </LinearGradient>
  );
};

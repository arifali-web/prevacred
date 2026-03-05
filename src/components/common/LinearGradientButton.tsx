import { Pressable, Text } from '@components';
import React from 'react';
import { LinearGradient } from 'react-native-linear-gradient';

type Props = {
  title: string;
  onPress: () => void;
  color1?: string;
  color2?: string;
  disabled?: boolean;
};

export function LinearGradientButton({
  title,
  onPress,
  color1 = '#A85155',
  color2 = '#A20C13',
  disabled = false,
}: Props) {
  return (
    <LinearGradient
      style={{
        borderRadius: 40,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 8 },
        elevation: 10,
        width: '100%',
        marginTop: 16,
      }}
      colors={disabled ? ['#B7B7B7', '#838383'] : [color1, color2]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Pressable
        onPress={onPress}
        align="mid"
        width={'100%'}
        height={67}
        borderRadius="l"
        disabled={disabled}
      >
        <Text color="white" style={{ fontSize: 15 }} font="SemiBold">
          {title}
        </Text>
      </Pressable>
    </LinearGradient>
  );
}
